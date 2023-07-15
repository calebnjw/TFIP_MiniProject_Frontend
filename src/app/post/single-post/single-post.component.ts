import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-single-post",
  templateUrl: "./single-post.component.html",
  styleUrls: ["./single-post.component.css"],
})
export class SinglePostComponent {
  constructor(private route: ActivatedRoute, private location: Location) {}

  post_id = Number(this.route.snapshot.paramMap.get("post_id"));

  goBack(): void {
    this.location.back();
  }
}
