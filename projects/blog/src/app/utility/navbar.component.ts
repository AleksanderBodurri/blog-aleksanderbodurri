import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-navbar',
  template: `
      <mat-toolbar color="primary">
        <header>
            <div class="author-name" aria-label="Aleksander Bodurri">
              <img src="assets/angular.svg" alt="The Angular logo.">
              <h1 aria-label="The name Aleksander Bodurri but with the A missing. The Angular Logo in the previous line acts as the A">
                leksander Bodurri
              </h1>
            </div>
            <div class="links">
              <a routerLink="posts">Posts</a>
              <a routerLink="about">About</a>
              <a routerLink="contact">Contact</a>
              <a target="_blank" href="https://github.com/AleksanderBodurri">
                <img src="assets/github.svg" alt="A link to Aleksander's Github">
              </a>
              <a target="_blank" href="https://twitter.com/alexbodurri">
                <img src="assets/twitter.svg" alt="A link to Aleksander's Twitter">
              </a>
            </div>
        </header>
      </mat-toolbar>
    `,
  styles: [
    `
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
  
        .author-name {
          display: flex;
          height: 40px;
          width: fit-content;
          align-items: center;
  
          img {
            width: 40px;
            aspect-ratio: 1;
            position: relative;
            left: 3px;
          }
  
          h1 {
            font-size: 2rem;
            margin: 0;
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