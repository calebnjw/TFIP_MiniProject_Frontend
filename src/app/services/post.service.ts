import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, map } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { Post } from "../models";

@Injectable()
export class PostService {
  http = inject(HttpClient);
  cookieService = inject(CookieService);

  // serverUrl: string = "https://notthreadsbackend.calebnjw.com/api/post/";
  serverUrl: string = "http://localhost:8080/api/post/";

  createPost(postData: FormData): Observable<any> {
    const headers = new HttpHeaders().set("Accept", "application/json");
    const url = this.serverUrl + "create";
    return this.http.post<{ postCreated: boolean }>(url, postData, {
      headers,
    });
  }

  getSinglePost(post_id: string): Observable<any> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
    const url = this.serverUrl + "find/" + post_id;
    console.log(url);

    return this.http.get(url, {
      headers,
    });
  }

  // getUserPosts(): Observable<any> {
  //   // get all posts from specific user
  // }

  getFeed(): Observable<any> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
    const url = this.serverUrl + "find/feed?feed=true&userId=" + this.cookieService.get("userId");
    return this.http.get(url, {
      headers,
    });
  }

  deletePost(userId: string, post_id: string): boolean {
    return true;
  }
}
