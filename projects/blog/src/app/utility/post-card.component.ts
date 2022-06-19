import { Component, Input } from '@angular/core';
import { Post } from '../ng-me/define-post';

@Component({
  selector: 'blog-post-card',
  template: `
    <a *ngIf="post" routerLink="/posts/{{ post.slug }}" (click)="scrollToTop()">
      <article class="blog-post-card-link">
        <header>
          <h1>
            {{ post.title }}
          </h1>
          <h1 class="date">
            <!-- {{ post.date }} -->
          </h1>
        </header>
        <section [innerHtml]="post.summary"></section>
      </article>
    </a>
  `,
  styles: [
    `
      a {
        text-decoration: none;
        color: #000000;
      }

      pre.server-rendered {
        all: unset;
      }

      .blog-post-card-link {
        border: 1px solid black;
        display: block;
        padding: 1rem;
        color: #000;
        transition: backdrop-filter 500ms ease-in-out;
        backdrop-filter: hue-rotate(45deg);

        &:hover {
          backdrop-filter: hue-rotate(135deg);
        }

        header {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #000;
          padding-bottom: 8px;

          h1 {
            font-size: 1.25rem;
            margin: 0;

            &.date {
              color: lightgrey;
              font-weight: 300;
              font-size: 1rem;
            }
          }
        }
      }
    `,
  ],
})
export class PostCardComponent {
  @Input() post: Post | undefined = undefined;

  scrollToTop(): void {
    (window as any).scrollTo(0, 0);
  }
}
