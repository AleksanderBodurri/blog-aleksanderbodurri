import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../routes/posts/define-post';

@Component({
  selector: 'blog-post-card',
  template: `
    <a *ngIf="post" routerLink="/posts/{{post.slug}}">
        <article>
          <header>
            <h1>
              {{ post.title }}
            </h1>
          </header>
            <section>
              <markdown
                lineNumbers
                [src]="post.summaryPath">
              </markdown>
            </section>
          </article>
        </a>
    `,
    styles: [
      `a {
        text-decoration: none;
        color: #000000;
      }`,
      `:host {
          border: 1px solid #e8e8e8;
          border-radius: 8px;
          display: block;
          padding: 1rem;
      }`
    ]
})

export class PostCardComponent implements OnInit {
  @Input() post: Post|undefined = undefined;
  constructor() { }
  ngOnInit() { }
}