import { SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LandingComponent } from './routes/landing/landing.component';
import { NavbarComponent } from './utility/navbar.component';
import { PostsComponent } from './routes/posts/posts.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostCardComponent } from './utility/post-card.component';
import { PostComponent } from './routes/post/post.component';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

// MAGIC_TARGET_FOR_TOOLING

const GENERATED_ROUTES: Routes = [];
const GENERATED_DECLARATIONS: any[] = [];

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
  ...GENERATED_ROUTES
];

const routerModuleImport = RouterModule.forRoot(routes, { 
  initialNavigation: 'enabledBlocking'
});

@NgModule({
  imports: [routerModuleImport],
  exports: [RouterModule]
})
export class AppRoutingModule { }


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    PostsComponent,
    PostComponent,
    PostCardComponent,
    ...GENERATED_DECLARATIONS
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE }),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
