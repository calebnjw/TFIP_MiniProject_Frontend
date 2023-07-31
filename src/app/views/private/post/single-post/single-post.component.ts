import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { PostService } from "src/app/services/post.service";
import { Post, PostData } from "src/app/models";

@Component({
  selector: "app-single-post",
  templateUrl: "./single-post.component.html",
  styleUrls: ["./single-post.component.css"],
})
export class SinglePostComponent implements OnInit {
  constructor(private route: ActivatedRoute, private location: Location) {}

  postService = inject(PostService);

  post_id: string | null = this.route.snapshot.paramMap.get("post_id");
  post!: Post;

  postLoading: boolean = false;

  ngOnInit(): void {
    console.log("POST_ID: ", this.post_id);
    if (this.post_id) {
      this.getPost(this.post_id);
    }
  }

  getPost(post_id: string): void {
    this.postLoading = true;
    this.postService.getSinglePost(post_id).subscribe({
      next: (response) => {
        this.postLoading = false;
        this.post = response.post;
        console.log("POST: ", response.post);
      },
      error: (error) => {
        this.postLoading = false;
        console.log("error");
      },
    });
  }

  goBack(): void {
    this.location.back();
  }
}
