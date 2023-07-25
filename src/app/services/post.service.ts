import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Post, PostData } from "../models";
import { Observable, map } from "rxjs";

@Injectable()
export class PostService {
  http = inject(HttpClient);

  createPost(postData: FormData): Observable<any> {
    const headers = new HttpHeaders().set("Accept", "application/json");
    return this.http.post<{ postCreated: boolean }>(
      "http://localhost:8080/api/post/create",
      postData,
      {
        headers,
      }
    );
  }

  // getPost(post_id: string): Post {
  //   let post: Post;
  //   // get single post
  //   return post;
  // }

  // getUserPosts(): Observable<any> {
  //   // get all posts from specific user
  // }

  getFeed(): Observable<any> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
    return this.http.get<{ postCreated: boolean }>("http://localhost:8080/api/post/find/all", {
      headers,
    });
  }

  deletePost(user_id: string, post_id: string): boolean {
    return true;
  }
}
