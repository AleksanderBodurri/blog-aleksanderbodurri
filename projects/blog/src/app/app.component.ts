import { Component } from '@angular/core';

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
export class AppComponent {
  title = 'Aleksander Bodurri';
  year = new Date();
}
