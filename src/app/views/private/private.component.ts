import { Component } from "@angular/core";
import { PostService } from "src/app/services/post.service";

@Component({
  selector: "app-private",
  templateUrl: "./private.component.html",
  styleUrls: ["./private.component.css"],
  providers: [PostService],
})
export class PrivateComponent {}
