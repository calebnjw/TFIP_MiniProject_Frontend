import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Component, OnInit, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { firstValueFrom } from "rxjs";
import { LoginData, SignupData } from "src/app/models";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  router = inject(Router);
  http = inject(HttpClient);

  userService = inject(UserService);

  loginFormBuilder = inject(FormBuilder);
  loginFormGroup!: FormGroup;
  signupFormBuilder = inject(FormBuilder);
  signupFormGroup!: FormGroup;

  usernameTaken: boolean = false;
  emailTaken: boolean = false;

  ngOnInit(): void {
    this.loginFormGroup = this.createLoginForm();
    this.signupFormGroup = this.createSignupForm();
  }

  createLoginForm(): FormGroup {
    return this.loginFormBuilder.group({
      username: this.loginFormBuilder.control<string>("", [Validators.required]),
      password: this.loginFormBuilder.control<string>("", [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  createSignupForm(): FormGroup {
    return this.loginFormBuilder.group({
      username: this.loginFormBuilder.control<string>("", [Validators.required]),
      email: this.loginFormBuilder.control<string>("", [Validators.required, Validators.email]),
      password: this.loginFormBuilder.control<string>("", [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  userLogin(): void {
    let loginData: LoginData = this.loginFormGroup.value as LoginData;
    console.log("LOGIN DATA: ", loginData);

    // firstValueFrom()
  }

  userSignup(): void {
    let signupData: SignupData = this.signupFormGroup.value as SignupData;
    console.log("SINGUP DATA: ", signupData);

    firstValueFrom(this.userService.registerUser(signupData))
      .then((res) => {
        console.log("RESPONSE: ", res);
        this.router.navigate(["/feed"]);
      })
      .catch((err) => {
        console.log(err);
        alert(err.error.error);
      });
  }

  // TODO:
  // have a global timer on the page that resets whenever there is input,
  // once timer runs out, checks for existing username and email
  // if existing, blocks user from registering (using validator)
  checkUsername(event: any): void {
    // let username: string = event.target.value;
    // if (username == "") {
    //   this.usernameTaken = false;
    // } else {
    //   this.userService.checkUsername(username).then((result) => {
    //     console.log("USERNAME CHECK RESULT: ", result);
    //     this.usernameTaken = result;
    //     console.log("USERNAME IS TAKEN INSIDE: ", this.usernameTaken);
    //   });
    // }
    // console.log("USERNAME IS TAKEN: ", this.usernameTaken);
  }

  async checkEmail(event: any): Promise<void> {
    // let email: string = event.target.value;
    // if (email == "" || email.length < 6) {
    //   this.emailTaken = false;
    // } else {
    //   // this.emailTaken = await firstValueFrom(this.userService.checkEmail(email));
    // }
    // console.log("EMAIL IS TAKEN: ", this.emailTaken);
  }
}
