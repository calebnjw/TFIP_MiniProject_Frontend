import { HttpClient } from "@angular/common/http";
import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";

import { Post } from "src/app/models";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.css"],
})
export class FeedComponent implements OnInit {
  router = inject(Router);
  http = inject(HttpClient);

  postService = inject(PostService);

  posts: Post[] = [];

  feedLoading: boolean = false;

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.feedLoading = true;
    this.postService.getFeed().subscribe({
      next: (response) => {
        this.feedLoading = false;
        console.log(response);
      },
      error: (error) => {
        this.feedLoading = false;
        console.log("error");
      },
    });
  }
}
