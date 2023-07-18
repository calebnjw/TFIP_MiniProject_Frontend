import { Component, OnInit, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { firstValueFrom } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  router = inject(Router);

  loginFormBuilder = inject(FormBuilder);
  loginFormGroup!: FormGroup;
  signupFormBuilder = inject(FormBuilder);
  signupFormGroup!: FormGroup;

  ngOnInit(): void {
    this.loginFormGroup = this.createLoginForm();
    this.signupFormGroup = this.createSignupForm();
  }

  createLoginForm(): FormGroup {
    return this.loginFormBuilder.group({
      username: this.loginFormBuilder.control<string>("", [Validators.required]),
      password: this.loginFormBuilder.control<string>("", [
        Validators.required,
        Validators.minLength(12),
      ]),
    });
  }

  createSignupForm(): FormGroup {
    return this.loginFormBuilder.group({
      username: this.loginFormBuilder.control<string>("", [Validators.required]),
      email: this.loginFormBuilder.control<string>("", [Validators.required, Validators.email]),
      password: this.loginFormBuilder.control<string>("", [
        Validators.required,
        Validators.minLength(12),
      ]),
    });
  }

  userLogin(): void {
    let loginData: FormData = this.loginFormGroup.value;
    // firstValueFrom()
  }

  userSignup(): void {
    let loginData: FormData = this.loginFormGroup.value;
    //
  }
}
