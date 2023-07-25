import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { LoginData, Profile, SignupData, User } from "../models";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Injectable()
export class UserService {
  router = inject(Router);
  http = inject(HttpClient);

  cookieService = inject(CookieService);

  // user!: User;
  // profile!: Profile;
  // usernameTaken: boolean = false;

  // async checkUsername(username: string): Promise<any> {
  //   const headers = new HttpHeaders().set("Accept", "application/json");
  //   await this.http
  //     .get<any>("http://localhost:8080/api/user/find/username/" + username, {
  //       headers,
  //     })
  //     .then((res: any) => {
  //       this.usernameTaken = res.userExists;
  //       console.log("RESPONSE INSIDE: ", usernameTaken);
  //     });

  //   return usernameTaken;
  // }

  // checkEmail(email: string): boolean {
  //   let emailTaken: boolean = false;
  //   const headers = new HttpHeaders().set("Accept", "application/json");
  //   this.http
  //     .get("http://localhost:8080/api/user/find/email/" + email, {
  //       headers,
  //     })
  //     .subscribe((res: any) => {
  //       emailTaken = res.userExists;
  //       console.log("RESPONSE: ", res.userExists);
  //     });

  //   return emailTaken;
  // }

  loginUser(loginData: LoginData): Observable<any> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
    return this.http.post<{ userLogin: boolean; user: User }>(
      "http://localhost:8080/api/user/login",
      loginData,
      {
        headers,
      }
    );
  }

  registerUser(signupData: SignupData): Observable<any> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
    return this.http.post<{ userLogin: boolean; user: User }>(
      "http://localhost:8080/api/user/create",
      signupData,
      {
        headers,
      }
    );
  }

  logoutUser(): void {
    // clear cookies
    this.cookieService.deleteAll();
    this.router.navigate(["/"]);
  }

  deleteUser(): boolean {
    // send request to delete currently authenticated user
    return true;
  }
}
