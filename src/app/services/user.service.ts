import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { SignupData } from "../models";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
  http = inject(HttpClient);

  usernameTaken: boolean = false;

  // async checkUsername(username: string): Promise<any> {
  //   const headers = new HttpHeaders().set("Accept", "application/json");
  //   await this.http
  //     .get<any>("http://localhost:8080/api/user/find/username/" + username, {
  //       headers,
  //     })
  //     .subscribe((res: any) => {
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

  registerUser(signupData: SignupData): Observable<any> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    return this.http.post("http://localhost:8080/api/user/create", signupData, {
      headers,
    });
  }
}
