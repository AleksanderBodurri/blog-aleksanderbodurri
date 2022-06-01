import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { Post } from '../routes/posts/define-post';

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
            {{ post.date | date }}
          </h1>
        </header>
        <section>
          <markdown *ngIf="isBrowser" lineNumbers ngPreserveWhitespaces>
            {{ post.summary }}
          </markdown>

          <pre
            class="server-rendered"
            *ngIf="!isBrowser"
            [innerHtml]="compiledSummary"
          ></pre>
        </section>
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
        border: 1px solid #e8e8e8;
        display: block;
        padding: 1rem;
        background: #fff;

        header {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #e8e8e8;

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
export class PostCardComponent implements OnInit {
  @Input() post: Post | undefined = undefined;
  isBrowser = false;
  compiledSummary = '';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private markdownService: MarkdownService
  ) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    console.log(this.post);

    if (!this.isBrowser) {
      this.compiledSummary = this.markdownService.compile(
        this.post?.summary ?? ''
      );
    }
  }

  scrollToTop(): void {
    (window as any).scrollTo(0, 0);
  }
}
