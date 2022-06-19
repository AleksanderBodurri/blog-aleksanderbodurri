import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { posts } from '../../define-post';

@Component({
  selector: 'code-block',
  template: `<div [innerHtml]="post"></div>`,
  standalone: true,
})
export class CodeBlockComponent implements OnInit {
  @Input() src = '';
  @Input() lazySrc = '';
  @Input() slug = '';
  post: any = '';

  constructor(private _httpClient: HttpClient) {}

  ngOnInit(): void {
    if (this.lazySrc) {
      this._httpClient
        .get(
          `assets/ng-me/generated/${this.slug}/${this.lazySrc.replace(
            '.md',
            '.html'
          )}`,
          { responseType: 'text' }
        )
        .subscribe((html) => {
          this.post = html;
        });
      return;
    }
    this.post = posts.find((post: any) => post.slug === this.slug)?.codeblocks[
      this.src
    ];
  }
}
