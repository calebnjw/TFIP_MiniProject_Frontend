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

  post_id = Number(this.route.snapshot.paramMap.get("post_id"));
  post!: Post;

  ngOnInit(): void {
    this.postService.getPost(this.post_id.toString());
  }

  goBack(): void {
    this.location.back();
  }
}
