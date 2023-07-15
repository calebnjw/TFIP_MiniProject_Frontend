import { Injectable, NgModule } from "@angular/core";
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from "@angular/router";

import { IndexComponent } from "./index/index.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NewPostComponent } from "./post/new-post/new-post.component";
import { SinglePostComponent } from "./post/single-post/single-post.component";
import { ProfileComponent } from "./profile/profile.component";
import { Title } from "@angular/platform-browser";

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
    title: "Not Threads",
    // no children, but uses auth service to check if user is logged in.
    // will show regular home page if user is logged out.
    // will show feed if user is logged in.
  },
  {
    path: "login",
    title: "Not Threads — Login",
    component: LoginComponent,
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
