import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  inject,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { ShieldService } from './shield.service';

@Component({
  selector: 'shield-maker-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  loaded = false;
  filteredOptions: string[] = [];
  lookUpIcon = new Subject<string>();
  myControl = new FormControl('');

  Math = Math;

  mode: 'material' | 'custom' = 'material';

  customSvgFile: File | null = null;
  isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor(
    private _iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public shieldService: ShieldService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {
    let link = this.doc.createElement('link');
    link.id = 'lazy-load-material-icons';
    link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    link.rel = 'stylesheet';
    this.doc.head.appendChild(link);

    if (!this.isBrowser) {
      return;
    }

    link = this.doc.createElement('link');
    link.id = 'lazy-load-material';
    link.href = '/shield-maker-styles.css';
    link.rel = 'stylesheet';
    this.doc.head.appendChild(link);

    this.lookUpIcon.pipe(debounceTime(250)).subscribe((iconLabel) => {
      this.customSvgFile = null;
      this.shieldService.svgAsString.next('');

      this._lookUpIcon(iconLabel);
    });

    this.shieldService.style.subscribe(() =>
      this.lookUpIcon.next(this.shieldService.icon.value)
    );
    this.shieldService.version.subscribe(() =>
      this.lookUpIcon.next(this.shieldService.icon.value)
    );

    this.myControl = new FormControl(this.shieldService.icon.value);

    this.myControl.valueChanges
      .pipe(
        startWith(''),
        debounceTime(200),
        map((value: any) => this._filter(value))
      )
      .subscribe((res) => {
        const panel = this.doc.querySelector(
          '.cdk-overlay-container .mat-autocomplete-panel'
        );
        if (panel) {
          panel.scrollTop = 0;
        }

        this.filteredOptions = res;
      });

    this.myControl.valueChanges.subscribe((option: any) => {
      this.shieldService.version.next(
        this.shieldService.iconNameToVersion[option]?.toString?.()
      );
      this.lookUpIcon.next(option);
    });

    this.shieldService.svgAsString.subscribe((svgString) => {
      this.mode = svgString === '' ? 'material' : 'custom';
    });

    this.lookUpIcon.next(this.shieldService.icon.value);
  }

  ngOnDestroy(): void {
    const matIconLink = this.doc.querySelectorAll('#lazy-load-material-icons');
    if (matIconLink) {
      matIconLink.forEach((e) => e.remove());
    }

    const materialLink = this.doc.querySelectorAll('#lazy-load-material');
    if (materialLink) {
      materialLink.forEach((e) => e.remove());
    }
  }

  onAutoCompleteOptionActivation(value: any): void {
    const option = value;
    this.shieldService.version.next(
      this.shieldService.iconNameToVersion[option]?.toString?.()
    );
    this.lookUpIcon.next(option);
  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();

    return this.shieldService.materialIconNames.sort((optionA, optionB) => {
      const optionAMatch = optionA.toLowerCase().startsWith(filterValue);
      const optionBMatch = optionB.toLowerCase().startsWith(filterValue);
      return Number(optionBMatch) - Number(optionAMatch);
    });
  }

  getMaterialUrl(): string {
    return `https://fonts.gstatic.com/s/i/${this.shieldService.namespace()}`;
  }

  onUpload(event: Event): void {
    const files = (event.target as any).files;
    const file = files[0];

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const encodedSVG = e.target.result.split('data:image/svg+xml;base64,')[1];
      const svg = atob(encodedSVG);

      this.shieldService.svgAsString.next(svg);
    };

    reader.readAsDataURL(file);
  }

  doesNotExist = new Set<string>();

  private _lookUpIcon(iconLabel: string): void {
    const url = `https://fonts.gstatic.com/s/i/${this.shieldService.style.value}/${iconLabel}/v${this.shieldService.version.value}/${this.shieldService.size.value}px.svg`;

    if (this.doesNotExist.has(url)) {
      return;
    }

    fetch(url).then((res) => {
      if (!res.ok) {
        this.doesNotExist.add(url);
        return;
      }

      this.shieldService.icon.next(iconLabel);

      this._iconRegistry.addSvgIconInNamespace(
        this.shieldService.namespace(),
        this.shieldService.icon.value,
        this.domSanitizer.bypassSecurityTrustResourceUrl(this.getMaterialUrl())
      );

      this.shieldService.iconRotation.next(
        this.shieldService.iconRotation.value
      );

      this.loaded = true;
    });
  }

  randomInputs(): void {
    this.shieldService.primary.next(this.generateRandomColor());
    this.shieldService.iconColor.next(this.generateRandomColor());
    this.shieldService.secondary.next(this.generateRandomColor());
  }

  generateRandomColor(): string {
    // https://css-tricks.com/snippets/javascript/random-hex-color/
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
