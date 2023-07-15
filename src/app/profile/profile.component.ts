import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent {
  constructor(private route: ActivatedRoute, private location: Location) {}

  user_id = Number(this.route.snapshot.paramMap.get("user_id"));

  goBack(): void {
    this.location.back();
  }
}
