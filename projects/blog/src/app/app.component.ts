import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

const mainStyles = `
  main {
    overflow-x: auto;

    footer {
      height: 100px;
      
      p {
        text-align: center;
        font-weight: 400;
        font-size: 16px;
        color: #000;
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
  styles: [mainStyles],
})
export class AppComponent implements OnInit {
  title = 'Aleksander Bodurri';
  year = new Date();

  constructor(
    private _router: Router,
    @Inject(DOCUMENT) private doc: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    const isBrowser = isPlatformBrowser(this.platformId);

    if (isBrowser) {
      const overlay = this.doc.createElement('div');
      overlay.id = 'overlay';
      this.doc.body.append(overlay);
    }

    this._router.events.subscribe((e) => {
      if (!(e instanceof NavigationStart)) {
        return;
      }
    });
  }
}
