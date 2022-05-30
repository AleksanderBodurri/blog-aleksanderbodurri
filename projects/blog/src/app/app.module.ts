import { SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LandingComponent } from './routes/landing/landing.component';
import { NavbarComponent } from './utility/navbar.component';
import { PostsComponent } from './routes/posts/posts.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostCardComponent } from './utility/post-card.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { GENERATED_ROUTES } from './generated-routes';
import { AboutComponent } from './routes/about/about.component';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full',
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  ...GENERATED_ROUTES,
];

const routerModuleImport = RouterModule.forRoot(routes, {
  initialNavigation: 'enabledBlocking',
  preloadingStrategy: QuicklinkStrategy,
});

@NgModule({
  imports: [routerModuleImport],
  exports: [RouterModule],
})
export class AppRoutingModule {}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    PostsComponent,
    PostCardComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    QuicklinkModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
    }),
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
