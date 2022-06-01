You may recognize the usage of `let isFirst = first` in the following template

```html
<div *ngFor="let event of eventQueue; let isFirst = first">
  <button *ngIf="isFirst" (click)="pop(event)">Execute Next Event</button>
  <h1>{{ event.name }}</h1>
</div>
```

It is a boolean variable exposed to the template supplied to the NgFor directive. It can be used to determine if the item rendering is the first item in the iterable passed into the directive. The example given is somewhat contrived but it should demonstrate clearly how the `first` variable is being used. You can read more on the [Angular.io](https://angular.io/api/common/NgForOf#local-variables) docs.

The NgFor directive is not magical, it does not possess capabilites within it that are out of reach for any custom directives we may want to write ourselves. So then how do we do this? Where does the `first` variable come from?

NgFor is a structural directive. This means that somewhere within the directive's logic, it changes the DOM layout by removing or creating DOM elements. In this case, NgFor creates embedded views based on the template we provide and the array passed in as an `@Input`. When this view is created, we have the option of exposing a context to that view. The NgFor directive provides a context object that contains a `first` get accessor. This is how we are able to use `first` in the NgFor template.

Lets build a simple structural directive that renders the template provided to it and exposes a number to the created view that is randomly generated with `Math.random()`

```ts
class RandomNumberContext {
  constructor(public random: number) {}
}

@Directive({
  selector: "[appRandomNumber]",
})
export class RandomNumberDirective implements OnInit {
  constructor(
    private _viewContainer: ViewContainerRef,
    private _templateRef: TemplateRef<RandomNumberContext>
  ) {}

  ngOnInit(): void {
    // First arg is the template we passed in, second arg is a context that we can provide to the view
    this._viewContainer.createEmbeddedView(
      this._templateRef,
      new RandomNumberContext(Math.random())
    );
  }
}
```

```html
<p *appRandomNumber="let myRandomNumber = random">
  Your random num is: {{ myRandomNumber }}
</p>
```

Maybe we want to access our number as a percent. Lets expand our Context class in the following way,

```ts
class RandomNumberContext {
  constructor(public random: number) {}

  get asPercent(): string {
    return (this.random * 100).toFixed(2) + "%";
  }
}
```

```html
<p
  *appRandomNumber="let myRandomNumber = random; let myRandomPercentage = asPercent"
>
  Your random num is: {{ myRandomNumber }}, Your random percentage is: {{
  myRandomPercentage }}
</p>
```
