import { Component, OnInit, Input } from '@angular/core';
import { posts } from '../../routes/posts/define-post';

@Component({
  selector: 'code-block',
  template: `<div [innerHtml]="post"></div>`,
  standalone: true,
})
export class CodeBlockComponent implements OnInit {
  @Input() src = '';
  @Input() slug = '';
  post: any = '';

  ngOnInit(): void {
    this.post = posts.find((post) => post.slug === this.slug)?.codeblocks[
      this.src
    ];
  }
}
