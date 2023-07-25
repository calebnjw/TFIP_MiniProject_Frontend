import { Component, Input, OnInit } from "@angular/core";
import { Post } from "src/app/models";

@Component({
  selector: "app-tweet",
  templateUrl: "./tweet.component.html",
  styleUrls: ["./tweet.component.css"],
})
export class TweetComponent implements OnInit {
  @Input() postData: Post;

  constructor() {}

  ngOnInit(): void {}
}
