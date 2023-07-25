import { HttpClient } from "@angular/common/http";
import { Component, OnInit, inject } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { firstValueFrom } from "rxjs";
import { Post, PostData } from "src/app/models";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.css"],
})
export class EditorComponent implements OnInit {
  router = inject(Router);
  http = inject(HttpClient);

  postService = inject(PostService);
  cookieService = inject(CookieService);

  formBuilder = inject(FormBuilder);
  postFormGroup!: FormGroup;

  postImage = null;

  ngOnInit(): void {
    this.postFormGroup = this.createPostForm();
  }

  createPostForm(): FormGroup {
    return this.formBuilder.group({
      post_content: new FormControl("", [Validators.required]),
      post_image: new FormControl({ value: null, disabled: true }, []), // image bytes?
    });
  }

  onFileSelect(event: any): void {
    console.log("FILES: ", event.target.files);
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.postImage = file;
    }
  }

  submitPost(): void {
    let postData: FormData = new FormData();

    // images can be transferred to the backend okay,
    // but don't have time to figure out how to upload images to a separate cloud
    postData.append("user_id", this.cookieService.get("userId"));
    postData.append("post_content", this.postFormGroup.value.post_content);
    postData.append("image", this.postImage ? this.postImage : "");

    console.log("POST DATA: ", postData);

    let postCreated = false;
    let waiting = true;

    this.postService.createPost(postData).subscribe((response) => {
      console.log(response.postCreated);
      waiting = false;
      postCreated = response.postCreated;
    });

    if (!waiting && postCreated) {
      this.router.navigate(["/app/feed"]);
      alert("Post created.");
    }

    if (!waiting && !postCreated) {
      alert("Failed to create post.");
    }
  }
}
