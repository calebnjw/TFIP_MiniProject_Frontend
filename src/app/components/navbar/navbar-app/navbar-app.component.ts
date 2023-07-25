import { Component, inject } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-navbar-app",
  templateUrl: "./navbar-app.component.html",
  styleUrls: ["./navbar-app.component.css"],
})
export class NavbarAppComponent {
  userService = inject(UserService);

  logoutUser(): void {
    this.userService.logoutUser();
  }
}
