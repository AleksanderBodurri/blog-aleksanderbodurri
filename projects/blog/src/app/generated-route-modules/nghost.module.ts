// THIS FILE WAS GENERATED BY TOOLING. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Component,
  NgModule,
  Inject,
  PLATFORM_ID,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { MarkdownService } from 'ngx-markdown';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'blog-nghost',
  template: `
    <markdown *ngIf="isBrowser" ngPreserveWhitespaces>
      Ever wonder what those strange \`_nghost\` and \`_ngcontent\` attributes
      are on your HTML tags? If this doesn't sound familiar, go to any Angular
      app and open the developer console for your browser. Inspect the HTML
      source of the application and you will likely see \`_nghost\` and
      \`_ngcontent\` attributes on some DOM elements. \`\`\`html
      {{ '<' }}app-root _nghost-mjt-c55 ng-version="..."{{ '>' }} ... \`\`\`
      These attributes are used by Angular's emulated View Encapsulation
      mechanism to scope component styles. Whats the deal with the postfix
      \`-mjt-c55\` in the example above? The \`c55\` (c is shorthand for
      component) is automatically generated by Angular whenever a new component
      is defined, as a way of scoping DOM elements to components so that the
      framework can emulate shadow DOM css. Behind the scenes something close to
      this occurs \`\`\`ts let compCounter = 0; function
      ɵɵdefineComponent(componentDef) {{ '{' }} let def = {{ '{' }}
      ... // Other component metadata id: 'c' ...
      {{ '}' }}
      def.id += compCounter++; return def
      {{ '}' }}
      \`\`\` What about the \`mjt\`? You'll likely see a different string in
      your projects. Similarly to how the c55 is used to scope the element to a
      component, this random 3 character string is used to scope an element to
      an application. It is generated once when the application is built and
      used for every css selector within the app. It is an application ID. This
      is used so that if two Angular applications are bootstrapped on the same
      page, component styling from one application won't leak through to the
      other. If the application ID wasn't there, all it would take for styles to
      leak from one application to another is that there is a component ID
      collision between the two apps. Since component IDs are incrementing
      integers starting at 0, this is not an unlikely case. Now for the fun
      part. You may have already tried inspecting the html source of this page.
      If you haven't, do so and you'll see something like this, \`\`\`html
      {{ '<' }}blog-root _nghost-one-framework-to-rule-them-all-c18
      ng-version="..."{{ '>' }} {{ '<' }}blog-navbar
      _ngcontent-one-framework-to-rule-them-all-c18{{ '>' }} ... \`\`\` In place
      of a randomly generated application ID there is a string
      "one-framework-to-rule-them-all". How did that happen? Angular exposes the
      \`APP_ID\` dependency injection token to its public API. The framework
      provides this token with a default factory that generates the random
      3-letter IDs that we've been seeing. Lets take a look at how the framework
      provides this default, \`\`\`ts export const APP_ID = new InjectionToken{{
        '<'
      }}string{{ '>' }}('AppId'); export function _appIdRandomProviderFactory()
      {{ '{' }} return \`{{ '$' }}{{ '{' }}_randomChar(){{ '}' }}{{ '$'
      }}{{ '{' }}_randomChar(){{ '}' }}{{ '$' }}{{ '{' }}_randomChar(){{
        '}'
      }}\`; // 3 random characters for the app id
      {{ '}' }}

      function _randomChar(): string {{ '{' }}
      return String.fromCharCode(97 + Math.floor(Math.random() * 25)); //
      generates a random character
      {{ '}' }}

      export const APP_ID_RANDOM_PROVIDER = {{ '{' }} provide: APP_ID,
      useFactory: _appIdRandomProviderFactory, deps: {{ '<' }}any[]{{ '>' }}[],
      {{ '}' }}; \`\`\` This means we can provide our own \`APP_ID\` and
      override the default \`APP_ID\` provided by Angular. \`\`\`ts @NgModule({{
        '{'
      }}
      declarations: [ ... ], imports: [ ... ], providers: [ ...
      {{ '{' }}
      provide: APP_ID, useValue: 'one-framework-to-rule-them-all',
      {{ '}' }}
      ... ], bootstrap: [AppComponent]
      {{ '}' }}) export class AppModule {{ '{' }}{{ '}' }}
      \`\`\` Of course, it is not reccomended to overwrite \`APP_ID\` in this
      way, and if we do, we should make sure we provide a factory to \`APP_ID\`
      that generates a random string. Overall this is a mostly useless trick,
      but one that I found to be a interesting example of the power dependency
      injection gives to developers. Maybe one day a company that uses Angular
      will provide \`APP_ID\` with a value to say "we-are-hiring", similar to
      how how Reddit puts out a hiring message with console logs.
    </markdown>
    <pre class="server-rendered" *ngIf="!isBrowser" [innerHtml]="content"></pre>
  `,
  styles: [
    `
      :host {
        display: block;
        max-width: 800px;
        margin: 2rem auto 0;

        @media screen and (max-width: 500px) {
          max-width: calc(100% - 24px);
        }
      }

      pre.server-rendered {
        all: unset;

        ::ng-deep {
          pre {
            background-color: #1e1f21;
            padding: 12px;

            pre {
              padding: 1em;
              margin: 0.5em 0;
              overflow: auto;
              border-radius: 0.3em;
            }

            code[class*='language-'] {
              color: #5ab9ca;
            }
          }
        }
      }
    `,
  ],
})
export class NghostComponent implements OnInit, OnDestroy {
  isBrowser = false;
  content = `
Ever wonder what those strange \`_nghost\` and \`_ngcontent\` attributes are on your HTML tags?

If this doesn't sound familiar, go to any Angular app and open the developer console for your browser. Inspect the HTML source of the application and you will likely see \`_nghost\` and \`_ngcontent\` attributes on some DOM elements.



\`\`\`html
  <app-root _nghost-mjt-c55 ng-version="...">
    ...
\`\`\`

These attributes are used by Angular's emulated View Encapsulation mechanism to scope component styles.

Whats the deal with the postfix \`-mjt-c55\` in the example above?

The \`c55\` (c is shorthand for component) is automatically generated by Angular whenever a new component is defined, as a way of scoping DOM elements to components so that the framework can emulate shadow DOM css.

Behind the scenes something close to this occurs

\`\`\`ts
let compCounter = 0;
  
function ɵɵdefineComponent(componentDef) {
  let def = {
    ... // Other component metadata
    id: 'c'
    ...
  }
  def.id += compCounter++;
  return def
}
\`\`\`

What about the \`mjt\`? You'll likely see a different string in your projects. Similarly to how the c55 is used to scope the element to a component, this random 3 character string is used to scope an element to an application. It is generated once when the application is built and used for every css selector within the app. It is an application ID.

This is used so that if two Angular applications are bootstrapped on the same page, component styling from one application won't leak through to the other.

If the application ID wasn't there, all it would take for styles to leak from one application to another is that there is a component ID collision between the two apps. Since component IDs are incrementing integers starting at 0, this is not an unlikely case.

Now for the fun part.

You may have already tried inspecting the html source of this page. If you haven't, do so and you'll see something like this,

\`\`\`html
<blog-root _nghost-one-framework-to-rule-them-all-c18 ng-version="...">
    <blog-navbar _ngcontent-one-framework-to-rule-them-all-c18>
            ...
\`\`\`

In place of a randomly generated application ID there is a string "one-framework-to-rule-them-all". How did that happen?

Angular exposes the \`APP_ID\` dependency injection token to its public API. The framework provides this token with a default factory that generates the random 3-letter IDs that we've been seeing. Lets take a look at how the framework provides this default,

\`\`\`ts
 export const APP_ID = new InjectionToken<string>('AppId');

 export function _appIdRandomProviderFactory() {
   return \`\${_randomChar()}\${_randomChar()}\${_randomChar()}\`; // 3 random characters for the app id
 }

 function _randomChar(): string {
  return String.fromCharCode(97 + Math.floor(Math.random() * 25)); // generates a random character
 }
  
 export const APP_ID_RANDOM_PROVIDER = {
   provide: APP_ID,
   useFactory: _appIdRandomProviderFactory,
   deps: <any[]>[],
 };
 \`\`\`
 
This means we can provide our own \`APP_ID\` and override the default \`APP_ID\` provided by Angular.

\`\`\`ts
@NgModule({
    declarations: [
      ...
    ],
    imports: [
      ...
    ],
    providers: [
      ...
      {
        provide: APP_ID,
        useValue: 'one-framework-to-rule-them-all',
      }
      ...
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule {}
 \`\`\`
 
Of course, it is not reccomended to overwrite \`APP_ID\` in this way, and if we do, we should make sure we provide a factory to \`APP_ID\` that generates a random string.

Overall this is a mostly useless trick, but one that I found to be a interesting example of the power dependency injection gives to developers. Maybe one day a company that uses Angular will provide \`APP_ID\` with a value to say "we-are-hiring", similar to how how Reddit puts out a hiring message with console logs.
`;

  constructor(
    @Inject(PLATFORM_ID) public platformId: Object,
    private markdownService: MarkdownService,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);

    this.meta.addTag({
      property: 'oh:title',
      content: 'Why are there _nghost attributes all over my HTML?',
    });
    this.meta.addTag({ property: 'oh:type', content: 'article' });
    this.meta.addTag({
      property: 'oh:url',
      content: 'https://aleksanderbodurri-eefbe.web.app/posts/nghost',
    });
    this.meta.addTag({
      property: 'oh:image',
      content: 'http://aleksanderbodurri-eefbe.web.app/assets/me.png',
    });
    this.meta.addTag({
      property: 'oh:image:secure_url',
      content: 'https://aleksanderbodurri-eefbe.web.app/assets/me.png',
    });

    if (true) {
      this.meta.addTag({
        name: 'description',
        content: 'Why are there _nghost attributes all over my HTML?',
      });
    }

    if (true) {
      this.meta.addTag({
        name: 'keywords',
        content: 'blog,post,Angular,angular,nghost,_nghost',
      });
    }

    if (!this.isBrowser) {
      this.content = this.markdownService.compile(this.content);
    }
  }

  ngOnDestroy(): void {
    this.meta.removeTag('property="oh:title"');
    this.meta.removeTag('property="oh:type"');
    this.meta.removeTag('property="oh:url"');
    this.meta.removeTag('property="oh:image"');
    this.meta.removeTag('property="oh:image:secure_url"');

    if (true) {
      this.meta.removeTag('name=description');
    }

    if (true) {
      this.meta.removeTag('name=keywords');
    }
  }
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: NghostComponent,
      },
    ]),
    MarkdownModule.forChild(),
  ],
  declarations: [NghostComponent],
  bootstrap: [],
})
export class LazyModule {}