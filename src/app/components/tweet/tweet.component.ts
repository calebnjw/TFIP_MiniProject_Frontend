import { Component, Input, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";
import { Post } from "src/app/models";

@Component({
  selector: "app-tweet",
  templateUrl: "./tweet.component.html",
  styleUrls: ["./tweet.component.css"],
})
export class TweetComponent implements OnInit {
  router = inject(Router);

  @Input() post!: Post;

  constructor() {}

  ngOnInit(): void {}

  openMenu(): void {}

  deletePost(): void {
    this.router.navigate(["/app"]);
  }

  goToPost(): void {
    this.router.navigate(["app/post/", this.post.postId]);
  }
}
