import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable()
export class PostService {
  http = inject(HttpClient);
}
