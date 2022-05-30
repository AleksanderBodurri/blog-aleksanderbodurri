import { Component, OnInit } from '@angular/core';
import { posts } from './define-post';

@Component({
  selector: 'blog-posts',
  template: `
    <ul>
      <li *ngFor="let post of posts">
        <blog-post-card [post]="post"></blog-post-card>
      </li>
    </ul>
  `,
  styles: [
    `
      ul {
        min-height: calc(100% - 200px);
        list-style: none;
        margin: 0;
        display: flex;
        padding: 1rem;
        flex-direction: column;
        gap: 1rem;
      }
    `,
  ],
})
export class PostsComponent implements OnInit {
  posts = posts;

  constructor() {}

  ngOnInit() {}
}
