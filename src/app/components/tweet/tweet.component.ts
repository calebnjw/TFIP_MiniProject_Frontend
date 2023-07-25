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

  @Input() postData: Post;

  constructor() {}

  ngOnInit(): void {}

  goToPost(): void {
    this.router.navigate(["app/post/", this.postData.post_id]);
  }
}
