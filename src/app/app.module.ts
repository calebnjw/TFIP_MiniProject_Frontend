import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

import { PublicComponent } from "./views/public/public.component";
import { HomeComponent } from "./views/public/home/home.component";
import { LoginComponent } from "./views/public/login/login.component";
import { PrivateComponent } from "./views/private/private.component";
import { FeedComponent } from "./views/private/feed/feed.component";
import { ProfileComponent } from "./views/private/profile/profile.component";
import { NewPostComponent } from "./views/private/post/new-post/new-post.component";
import { SinglePostComponent } from "./views/private/post/single-post/single-post.component";
import { PageNotFoundComponent } from "./views/page-not-found/page-not-found.component";

import { NavbarHomeComponent } from "./components/navbar/navbar-home/navbar-home.component";
import { NavbarAppComponent } from "./components/navbar/navbar-app/navbar-app.component";
import { TweetComponent } from "./components/tweet/tweet.component";
import { UserService } from "./services/user.service";
import { EditorComponent } from './components/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    HomeComponent,
    LoginComponent,
    PrivateComponent,
    FeedComponent,
    ProfileComponent,
    NewPostComponent,
    SinglePostComponent,
    PageNotFoundComponent,
    NavbarHomeComponent,
    NavbarAppComponent,
    TweetComponent,
    EditorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
