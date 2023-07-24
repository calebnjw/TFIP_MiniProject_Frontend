import { HttpClient } from "@angular/common/http";
import { Component, OnInit, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { firstValueFrom } from "rxjs";
import { Post, PostData } from "src/app/models";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.css"],
})
export class EditorComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  postFormGroup!: FormGroup;

  postService = inject(PostService);

  router = inject(Router);
  http = inject(HttpClient);

  ngOnInit(): void {
    this.postFormGroup = this.createPostForm();
  }

  createPostForm(): FormGroup {
    return this.formBuilder.group({
      post_content: this.formBuilder.control<string>("", [Validators.required]),
      password: this.formBuilder.control<string>("", []),
    });
  }

  submitPost(): void {
    let postData: PostData = this.postFormGroup.value as PostData;
    console.log("SINGUP DATA: ", postData);

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
