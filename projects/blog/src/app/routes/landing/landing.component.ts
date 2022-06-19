import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { posts } from '../../ng-me/define-post';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
  @ViewChild('authorImage', { static: true }) authorImage:
    | ElementRef
    | undefined = undefined;
  posts = posts.slice(0, 1);
  isBrowser = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    const lowRes = 'assets/alex-lq-small.webp';
    const highRes = 'assets/alex-hq-small.webp';

    this.meta.addTag({
      name: 'description',
      content: 'Just a simple man trying to make my way through the universe.',
    });
    this.meta.addTag({
      name: 'keywords',
      content: 'Angular,angular,Aleksander Bodurri, Angular DevTools, blog',
    });

    if (this.isBrowser) {
      // polyfill for safari :(
      const schedule = (window as any).requestIdleCallback
        ? requestIdleCallback
        : setTimeout;
      schedule(() => {
        const element = this.authorImage!.nativeElement as HTMLImageElement;
        element.onload = () => {
          element.classList.remove('no-quality');
          element.onload = () => {};
          element.src = highRes;
        };
        element.src = lowRes;
      });
    }
  }

  ngOnDestroy() {
    this.meta.removeTag('name=description');
    this.meta.removeTag('name=keywords');
  }
}
