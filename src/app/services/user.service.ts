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

  serverUrl: string = "https://notthreadsbackend.calebnjw.com/api/user/";

  // user!: User;
  // profile!: Profile;
  // usernameTaken: boolean = false;

  loginUser(loginData: LoginData): Observable<any> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
    const url = this.serverUrl + "login";
    return this.http.post<{ userLogin: boolean; user: User }>(url, loginData, {
      headers,
    });
  }

  registerUser(signupData: SignupData): Observable<any> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
    const url = this.serverUrl + "create";
    return this.http.post<{ userLogin: boolean; user: User }>(url, signupData, {
      headers,
    });
  }

  logoutUser(): void {
    // clear cookies
    this.cookieService.deleteAll();
    this.router.navigate(["/"]);
  }

  deleteUser(): boolean {
    // send request to delete currently authenticated user
    this.cookieService.deleteAll();
    this.router.navigate(["/"]);
    return true;
  }

  // async checkUsername(username: string): Promise<any> {
  //   const headers = new HttpHeaders().set("Accept", "application/json");
  //   url = this.serverUrl + "find/username/" + username;
  //   await this.http
  //     .get<any>(url, {
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
  //   url = this.serverUrl + "find/email/" + email;
  //   this.http
  //     .get(url, {
  //       headers,
  //     })
  //     .subscribe((res: any) => {
  //       emailTaken = res.userExists;
  //       console.log("RESPONSE: ", res.userExists);
  //     });

  //   return emailTaken;
  // }
}
