import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-navbar',
  template: `
      <mat-toolbar color="primary">
        <header>
            <div class="links">
              <a target="_blank" href="https://github.com/AleksanderBodurri">
                <img src="assets/github.svg" alt="A link to Aleksander's Github">
              </a>
              <a target="_blank" href="https://twitter.com/alexbodurri">
                <img src="assets/twitter.svg" alt="A link to Aleksander's Twitter">
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/aleksander-bodurri-6b7167145">
                <img src="assets/linked-in.png" alt="A link to Aleksander's Twitter">
              </a>
            </div>
            <div class="links">
              <a routerLink="/">Home</a>
              <a routerLink="posts">Posts</a>
              <a routerLink="about">About</a>
              <a target="_blank" href="assets/resume/index.html">Resume</a>
            </div>
        </header>
      </mat-toolbar>
    `,
  styles: [
    `
      mat-toolbar {
        box-shadow: 0px 1px 6px black;
      }

      header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .links {
          display: flex;
          align-items: center;
          gap: 1rem;

          a {
            text-decoration: none;
            color: #ffffff;

            img {
              position: relative;
              top: 3px;
              aspect-ratio: 1;
              width: 30px;
              filter: contrast(0) brightness(2) drop-shadow(1px 1px 1px black)
            }
          }
        }
      }


      :host {
        display: block;
        width: 100%
      }
    `
  ]
})

export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}