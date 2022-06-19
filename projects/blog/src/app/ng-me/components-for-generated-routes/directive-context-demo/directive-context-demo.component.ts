import { CommonModule } from '@angular/common';
import {
  Component,
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

class RandomNumberContext {
  constructor(public random: number) {}

  get asPercent(): string {
    return (this.random * 100).toFixed(2) + '%';
  }
}

@Directive({
  selector: '[appRandomNumber]',
  standalone: true,
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

@Component({
  selector: 'directive-context-demo',
  template: `
    <ng-container *ngIf="!getterDemoEnabled">
      <p *appRandomNumber="let myRandomNumber = random">
        Your random num is: {{ myRandomNumber }}
      </p>
    </ng-container>

    <ng-container *ngIf="getterDemoEnabled">
      <p
        *appRandomNumber="
          let myRandomNumber = random;
          let myRandomPercentage = asPercent
        "
      >
        Your random num is: {{ myRandomNumber }}, Your random percentage is:
        {{ myRandomPercentage }}
      </p>
    </ng-container>
  `,
  imports: [CommonModule, RandomNumberDirective],
  standalone: true,
})
export class DirectiveContextDemoComponent {
  @Input() set withGetter(flag: string) {
    this._withGetter = flag === 'true';
  }

  get getterDemoEnabled(): boolean {
    return this._withGetter;
  }

  _withGetter = false;
}
