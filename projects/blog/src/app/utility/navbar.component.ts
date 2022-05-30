import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-navbar',
  template: `
    <mat-toolbar color="primary">
      <header>
        <div class="links">
          <a routerLink="/">Home</a>
          <a class="posts" routerLink="posts">Posts</a>
          <a class="about" routerLink="about">About</a>
          <a class="resume" target="_blank" href="assets/resume/index.html"
            >Resume</a
          >
        </div>
        <div class="links">
          <a target="_blank" href="https://github.com/AleksanderBodurri">
            <img src="assets/github.svg" alt="A link to Aleksander's Github" />
          </a>
          <a target="_blank" href="https://twitter.com/alexbodurri">
            <img
              src="assets/twitter.svg"
              alt="A link to Aleksander's Twitter"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/aleksander-bodurri-6b7167145"
          >
            <img
              src="assets/linked-in.png"
              alt="A link to Aleksander's Twitter"
            />
          </a>
        </div>
      </header>
    </mat-toolbar>
  `,
  styles: [
    `
      header {
        width: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .links {
          display: flex;
          align-items: center;
          gap: 1rem;

          .posts,
          .about,
          .resume {
            @media screen and (max-width: 700px) {
              display: none;
            }
          }

          a {
            text-decoration: none;
            color: #ffffff;

            img {
              position: relative;
              top: 3px;
              aspect-ratio: 1;
              width: 30px;
              filter: contrast(0) brightness(2);
            }
          }
        }
      }

      :host {
        display: block;
        width: 100%;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
