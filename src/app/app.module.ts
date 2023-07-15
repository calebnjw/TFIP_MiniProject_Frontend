import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { FeedComponent } from "./feed/feed.component";
import { HomeComponent } from "./home/home.component";
import { IndexComponent } from "./index/index.component";
import { LoginComponent } from "./login/login.component";
import { NewPostComponent } from "./post/new-post/new-post.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProfileComponent } from "./profile/profile.component";
import { SinglePostComponent } from "./post/single-post/single-post.component";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    NewPostComponent,
    SinglePostComponent,
    HomeComponent,
    FeedComponent,
    ProfileComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
