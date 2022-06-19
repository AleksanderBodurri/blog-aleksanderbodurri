import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeBlockComponent } from '../code-block/code-block.component';

@Component({
  selector: 'code-tabs',
  standalone: true,
  imports: [CommonModule, CodeBlockComponent],
  template: `
    <div #headerContent style="display: none">
      <div id="code-headers">
        <ng-content select="[code-headers]"></ng-content>
      </div>
    </div>
    <div class="tab-group">
      <header #headerTrack>
        <ol role="tablist" #tabList>
          <li
            class="header"
            id="header-{{ index }}"
            [class.selected]="headers[this.selectedIndex] === header"
            tabindex="0"
            role="tab"
            *ngFor="let header of headers; let index = index"
            (keydown.enter)="selectTab(index)"
            (click)="selectTab(index)"
          >
            {{ header }}
          </li>
        </ol>
        <div class="highlight-track">
          <div #highlight class="highlight"></div>
        </div>
      </header>
      <section #tabContent>
        <ng-content select="[tabs]"></ng-content>
      </section>
    </div>
  `,
  styleUrls: ['./code-tabs.component.scss'],
})
export class CodeTabsComponent implements OnInit, AfterViewInit {
  @ViewChild('headerContent', { static: true }) headerContent:
    | ElementRef<HTMLElement>
    | undefined;
  @ViewChild('tabContent', { static: true }) tabContent:
    | ElementRef<HTMLElement>
    | undefined;
  @ViewChild('highlight', { static: true }) highlight:
    | ElementRef<HTMLDivElement>
    | undefined;
  @ViewChild('tabList', { static: true }) tabList:
    | ElementRef<HTMLElement>
    | undefined;
  @ViewChild('headerTrack', { static: true }) headerTrack:
    | ElementRef<HTMLElement>
    | undefined;

  @Input() height: string | undefined;

  headers: any[] = [];
  selectedIndex = 0;

  ngOnInit(): void {
    const contentElem = this.headerContent!.nativeElement;
    this.headers = Array.from(
      contentElem.querySelectorAll('#code-headers li')
    ).map((li) => li.innerHTML);

    if (this.height !== undefined) {
      (this.tabContent!.nativeElement as HTMLElement).classList.add(
        'height-set'
      );
      (this.tabContent!.nativeElement as HTMLElement).style.height =
        this.height;
    }
  }

  ngAfterViewInit(): void {
    this.selectTab(0);
  }

  selectTab(index: number) {
    this.selectedIndex = index;
    const tabContentElement = this.tabContent!.nativeElement;
    const listElements = Array.from(
      tabContentElement.querySelectorAll('ol[tabs] li')
    ) as HTMLElement[];

    listElements.forEach((element, elementIndex) => {
      element.style.display = 'none';

      if (this.selectedIndex === elementIndex) {
        element.style.display = 'block';
      }
    });

    const tabListElement = this.tabList!.nativeElement;
    const liElements = Array.from(
      tabListElement.querySelectorAll('li.header')
    ) as HTMLElement[];
    let xoffset = 0;
    for (const liElement of liElements) {
      if (liElement === liElements[index]) {
        break;
      }

      xoffset += liElement.clientWidth;
    }

    const highlight = this.highlight!.nativeElement as HTMLElement;
    highlight.style.left = xoffset + 'px';
    highlight.style.width = liElements[index].clientWidth + 'px';

    const headerTrack = this.headerTrack!.nativeElement as HTMLElement;
    headerTrack.scrollLeft = xoffset - 100;
  }
}
