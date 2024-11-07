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
      <div class="icon-links links">
        <a target="_blank" href="https://github.com/AleksanderBodurri">
          <img src="assets/github.webp" alt="A link to Aleksander's Github" />
        </a>
        <a
          class="BlueSky-icon"
          target="_blank"
          href="https://bsky.app/profile/abodurri.bsky.social"
        >
          <img src="assets/BlueSky.webp" alt="A link to Aleksander's BlueSky" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/aleksander-bodurri-6b7167145"
        >
          <img
            src="assets/linked-in.webp"
            alt="A link to Aleksander's BlueSky"
          />
        </a>
      </div>
    </header>
  `,
})
export class NavbarComponent {}
