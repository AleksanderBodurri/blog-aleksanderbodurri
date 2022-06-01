import { Component } from '@angular/core';

@Component({
  selector: 'blog-navbar',
  template: `
    <header class="blog-navbar">
      <div class="links">
        <a routerLink="/">Home</a>
        <a class="posts" routerLink="posts">Posts</a>
        <!-- <a class="about" routerLink="about">About</a> -->
        <a class="shield-maker" routerLink="shield-maker">Shield-Maker</a>
      </div>
      <div class="links">
        <a target="_blank" href="https://github.com/AleksanderBodurri">
          <img src="assets/github.svg" alt="A link to Aleksander's Github" />
        </a>
        <a target="_blank" href="https://twitter.com/alexbodurri">
          <img src="assets/twitter.svg" alt="A link to Aleksander's Twitter" />
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
  `,
})
export class NavbarComponent {}
