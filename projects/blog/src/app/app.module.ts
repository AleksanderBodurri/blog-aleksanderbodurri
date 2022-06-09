import { APP_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingComponent } from './routes/landing/landing.component';
import { NavbarComponent } from './utility/navbar.component';
import { PostsComponent } from './routes/posts/posts.component';
import { PostCardComponent } from './utility/post-card.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { GENERATED_ROUTES } from './generated-routes';
import { AboutComponent } from './routes/about/about.component';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

const defaultTitle = 'Aleksander Bodurri | Blog';

const routes: Routes = [
  {
    path: '',
    title: defaultTitle,
    component: LandingComponent,
    pathMatch: 'full',
  },
  {
    path: 'posts',
    title: defaultTitle,
    component: PostsComponent,
  },
  {
    path: 'about',
    title: defaultTitle,
    component: AboutComponent,
  },
  {
    path: 'shield-maker',
    title: defaultTitle,
    loadChildren: () =>
      import('../../../shield-maker/src/app/app.module').then(
        (m) => m.AppModule
      ),
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
    BrowserAnimationsModule,
    QuicklinkModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_ID,
      useValue: 'one-framework-to-rule-them-all',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
