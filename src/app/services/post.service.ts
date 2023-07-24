import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Post, PostData } from "../models";
import { Observable, map } from "rxjs";

@Injectable()
export class PostService {
  http = inject(HttpClient);

  createPost(postData: PostData): Observable<any> {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
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

  // getUserPosts(user_id: string): Post[] {
  //   let posts: Post[];
  //   // get all posts from specific user
  //   return posts;
  // }

  // getFeedPosts(user_id: string): Post[] {
  //   let posts: Post[];
  //   // get all posts from accounts that user follows (table not implemented)
  //   return posts;
  // }

  deletePost(user_id: string, post_id: string): boolean {
    return true;
  }
}
