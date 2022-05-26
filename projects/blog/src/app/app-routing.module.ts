import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './routes/landing/landing.component';
import { PostComponent } from './routes/post/post.component';
import { PostsComponent } from './routes/posts/posts.component';

const routes: Routes = [
  {
    path: "",
    component: LandingComponent,
    pathMatch: "full"
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/:slug',
    component: PostComponent
  }
];

const routerModuleImport = RouterModule.forRoot(routes, { 
  initialNavigation: 'enabledBlocking'
});

@NgModule({
  imports: [routerModuleImport],
  exports: [RouterModule]
})
export class AppRoutingModule { }
