import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    {{ foo }}
    <br />
    <ng-content></ng-content>
  `,
  standalone: true,
  styles: [
    `
      :host {
        display: block;
        background: #fff;
      }
    `,
  ],
})
export class HelloWorldComponent {
  foo = 'hello world';
}
