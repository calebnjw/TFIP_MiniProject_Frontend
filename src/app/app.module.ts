import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { IndexComponent } from "./index/index.component";
import { AllPostsComponent } from "./profile/all-posts/all-posts.component";
import { SinglePostComponent } from "./post/single-post/single-post.component";
import { NewPostComponent } from "./post/new-post/new-post.component";
import { LoginComponent } from "./login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FeedComponent } from "./feed/feed.component";
import { PostOutletComponent } from "./post/post-outlet/post-outlet.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProfileOutletComponent } from "./profile/profile-outlet/profile-outlet.component";

const appRoutes: Routes = [
  {
    path: "",
    component: IndexComponent,
    title: "Not Threads",
    children: [
      // make two more components for regular home page and feed for logged out and logged in states respectively
      { path: "home", component: IndexComponent, title: "Not Threads" },
      { path: "login", component: LoginComponent },
      {
        path: "user",
        component: ProfileOutletComponent,
        children: [{ path: ":user_id", component: AllPostsComponent }],
      },
      {
        path: "post",
        component: PostOutletComponent,
        children: [
          { path: "new", component: NewPostComponent },
          { path: ":post_id", component: SinglePostComponent },
        ],
      },
    ],
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AllPostsComponent,
    IndexComponent,
    LoginComponent,
    NewPostComponent,
    SinglePostComponent,
    HomeComponent,
    FeedComponent,
    PostOutletComponent,
    PageNotFoundComponent,
    ProfileOutletComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
