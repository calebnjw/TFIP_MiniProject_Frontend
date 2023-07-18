import { Injectable, NgModule } from "@angular/core";
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from "@angular/router";

import { Title } from "@angular/platform-browser";

import { PublicComponent } from "./views/public/public.component";
import { HomeComponent } from "./views/public/home/home.component";
import { LoginComponent } from "./views/public/login/login.component";
import { PrivateComponent } from "./views/private/private.component";
import { FeedComponent } from "./views/private/feed/feed.component";
import { ProfileComponent } from "./views/private/profile/profile.component";
import { NewPostComponent } from "./views/private/post/new-post/new-post.component";
import { SinglePostComponent } from "./views/private/post/single-post/single-post.component";
import { PageNotFoundComponent } from "./views/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    component: PublicComponent,
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: "home",
        title: "Not Threads",
        component: HomeComponent,
        // no children, but uses auth service to check if user is logged in.
        // will show regular home page if user is logged out.
        // will show feed if user is logged in.
      },
      {
        path: "login",
        title: "Not Threads — Login",
        component: LoginComponent,
      },
    ],
  },
  {
    path: "app",
    component: PrivateComponent,
    children: [
      { path: "", redirectTo: "feed", pathMatch: "full" },
      {
        path: "feed",
        component: FeedComponent,
      },
      {
        path: "user/:user_id",
        component: ProfileComponent,
      },
      {
        path: "post/new",
        component: NewPostComponent,
      },
      {
        path: "post/:post_id",
        component: SinglePostComponent,
      },
    ],
  },
  {
    path: "**",
    title: "Not Threads — Page Not Found",
    component: PageNotFoundComponent,
  },
];

@Injectable({ providedIn: "root" })
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`${title}`);
    }
  }
}

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: TemplatePageTitleStrategy }],
})
export class AppRoutingModule {}
