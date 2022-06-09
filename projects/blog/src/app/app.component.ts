import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

const navBarStyles = `
  blog-navbar {
  }
`;
const mainStyles = `
  main {
    overflow-x: auto;

    footer {
      height: 100px;
      
      p {
        text-align: center;
        color: #aaaaaa;
      }
    }
  }
`;

@Component({
  selector: 'blog-root',
  template: `
    <blog-navbar></blog-navbar>
    <main>
      <router-outlet></router-outlet>

      <footer>
        <p>
          Copyright {{ year.getFullYear() }} <br />
          Aleksander Bodurri
        </p>
      </footer>
    </main>
  `,
  styles: [mainStyles, navBarStyles],
})
export class AppComponent implements OnInit {
  title = 'Aleksander Bodurri';
  year = new Date();

  constructor(
    private _router: Router,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {
    this._router.events.subscribe((e) => {
      if (!(e instanceof NavigationStart)) {
        return;
      }
    });
  }
}
