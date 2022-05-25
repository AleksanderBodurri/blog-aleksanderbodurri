import { Component } from '@angular/core';

const navBarStyles = `
  blog-navbar {
    position: fixed;
    z-index: 10000;
  }
`

const routerOutletStyles = `
  router-outlet {
    display: block;
    padding-top: 64px;
  }
`

@Component({
  selector: 'blog-root',
  template: `
    <blog-navbar></blog-navbar>
    <router-outlet></router-outlet>
  `,
  styles: [
    navBarStyles,
    routerOutletStyles
  ]
})
export class AppComponent {
  title = 'Aleksander Bodurri';
}
