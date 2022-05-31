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
  selector: 'blog-vue',
  template: `
    <markdown *ngIf="isBrowser" ngPreserveWhitespaces
      >{{ '<' }}p align="center"{{ '>' }}{{ '<' }}a href="https://vuejs.org"
      target="_blank" rel="noopener noreferrer"{{ '>' }}{{ '<' }}img width="100"
      src="https://vuejs.org/images/logo.png" alt="Vue logo"{{ '>'
      }}{{ '<' }}/a{{ '>' }}{{ '<' }}/p{{ '>' }}

      {{ '<' }}p align="center"{{ '>' }} {{ '<' }}a
      href="https://circleci.com/gh/vuejs/vue/tree/dev"{{ '>' }}{{ '<' }}img
      src="https://img.shields.io/circleci/project/github/vuejs/vue/dev.svg?sanitize=true"
      alt="Build Status"{{ '>' }}{{ '<' }}/a{{ '>' }} {{ '<' }}a
      href="https://codecov.io/github/vuejs/vue?branch=dev"{{ '>' }}{{ '<' }}img
      src="https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg?sanitize=true"
      alt="Coverage Status"{{ '>' }}{{ '<' }}/a{{ '>' }} {{ '<' }}a
      href="https://npmcharts.com/compare/vue?minimal=true"{{ '>' }}{{ '<' }}img
      src="https://img.shields.io/npm/dm/vue.svg?sanitize=true"
      alt="Downloads"{{ '>' }}{{ '<' }}/a{{ '>' }} {{ '<' }}a
      href="https://www.npmjs.com/package/vue"{{ '>' }}{{ '<' }}img
      src="https://img.shields.io/npm/v/vue.svg?sanitize=true" alt="Version"{{
        '>'
      }}{{ '<' }}/a{{ '>' }} {{ '<' }}a
      href="https://www.npmjs.com/package/vue"{{ '>' }}{{ '<' }}img
      src="https://img.shields.io/npm/l/vue.svg?sanitize=true" alt="License"{{
        '>'
      }}{{ '<' }}/a{{ '>' }} {{ '<' }}a href="https://chat.vuejs.org/"{{ '>'
      }}{{ '<' }}img
      src="https://img.shields.io/badge/chat-on%20discord-7289da.svg?sanitize=true"
      alt="Chat"{{ '>' }}{{ '<' }}/a{{ '>' }} {{ '<' }}/p{{ '>' }}

      ## This repo is for Vue 2 You are looking at the repository for Vue 2. The
      repo for Vue 3 is [vuejs/core](https://github.com/vuejs/core). ## Sponsors
      Vue.js is an MIT-licensed open source project with its ongoing development
      made possible entirely by the support of these awesome
      [backers](https://github.com/vuejs/core/blob/main/BACKERS.md). If you'd
      like to join them, please consider [ sponsor Vue's
      development](https://vuejs.org/sponsor/).

      {{ '<' }}p align="center"{{ '>' }} {{ '<' }}a target="_blank"
      href="https://vuejs.org/sponsor/"{{ '>' }} {{ '<' }}img alt="sponsors"
      src="https://sponsors.vuejs.org/sponsors.svg"{{ '>' }} {{ '<' }}/a{{
        '>'
      }}
      {{ '<' }}/p{{ '>' }}

      --- ## Introduction Vue (pronounced \`/vjuː/\`, like view) is a
      **progressive framework** for building user interfaces. It is designed
      from the ground up to be incrementally adoptable, and can easily scale
      between a library and a framework depending on different use cases. It
      consists of an approachable core library that focuses on the view layer
      only, and an ecosystem of supporting libraries that helps you tackle
      complexity in large Single-Page Applications. #### Browser Compatibility
      Vue.js supports all browsers that are
      [ES5-compliant](https://kangax.github.io/compat-table/es5/) (IE8 and below
      are not supported). ## Ecosystem | Project | Status | Description | |
      --------------------- |
      ------------------------------------------------------------ |
      ------------------------------------------------------- | | [vue-router] |
      [![vue-router-status]][vue-router-package] | Single-page application
      routing | | [vuex] | [![vuex-status]][vuex-package] | Large-scale state
      management | | [vue-cli] | [![vue-cli-status]][vue-cli-package] | Project
      scaffolding | | [vue-loader] | [![vue-loader-status]][vue-loader-package]
      | Single File Component (\`*.vue\` file) loader for webpack | |
      [vue-server-renderer] |
      [![vue-server-renderer-status]][vue-server-renderer-package] | Server-side
      rendering support | | [vue-class-component] |
      [![vue-class-component-status]][vue-class-component-package] | TypeScript
      decorator for a class-based API | | [vue-rx] |
      [![vue-rx-status]][vue-rx-package] | RxJS integration | | [vue-devtools] |
      [![vue-devtools-status]][vue-devtools-package] | Browser DevTools
      extension | [vue-router]: https://github.com/vuejs/vue-router [vuex]:
      https://github.com/vuejs/vuex [vue-cli]: https://github.com/vuejs/vue-cli
      [vue-loader]: https://github.com/vuejs/vue-loader [vue-server-renderer]:
      https://github.com/vuejs/vue/tree/dev/packages/vue-server-renderer
      [vue-class-component]: https://github.com/vuejs/vue-class-component
      [vue-rx]: https://github.com/vuejs/vue-rx [vue-devtools]:
      https://github.com/vuejs/vue-devtools [vue-router-status]:
      https://img.shields.io/npm/v/vue-router.svg [vuex-status]:
      https://img.shields.io/npm/v/vuex.svg [vue-cli-status]:
      https://img.shields.io/npm/v/@vue/cli.svg [vue-loader-status]:
      https://img.shields.io/npm/v/vue-loader.svg [vue-server-renderer-status]:
      https://img.shields.io/npm/v/vue-server-renderer.svg
      [vue-class-component-status]:
      https://img.shields.io/npm/v/vue-class-component.svg [vue-rx-status]:
      https://img.shields.io/npm/v/vue-rx.svg [vue-devtools-status]:
      https://img.shields.io/chrome-web-store/v/nhdogjmejiglipccpnnnanhbledajbpd.svg
      [vue-router-package]: https://npmjs.com/package/vue-router [vuex-package]:
      https://npmjs.com/package/vuex [vue-cli-package]:
      https://npmjs.com/package/@vue/cli [vue-loader-package]:
      https://npmjs.com/package/vue-loader [vue-server-renderer-package]:
      https://npmjs.com/package/vue-server-renderer
      [vue-class-component-package]:
      https://npmjs.com/package/vue-class-component [vue-rx-package]:
      https://npmjs.com/package/vue-rx [vue-devtools-package]:
      https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd
      ## Documentation To check out [live
      examples](https://vuejs.org/v2/examples/) and docs, visit
      [vuejs.org](https://vuejs.org). ## Questions For questions and support
      please use [the official forum](https://forum.vuejs.org) or [community
      chat](https://chat.vuejs.org/). The issue list of this repo is
      **exclusively** for bug reports and feature requests. ## Issues Please
      make sure to read the [Issue Reporting
      Checklist](https://github.com/vuejs/vue/blob/dev/.github/CONTRIBUTING.md#issue-reporting-guidelines)
      before opening an issue. Issues not conforming to the guidelines may be
      closed immediately. ## Changelog Detailed changes for each release are
      documented in the [release notes](https://github.com/vuejs/vue/releases).
      ## Stay In Touch - [Twitter](https://twitter.com/vuejs) -
      [Blog](https://medium.com/the-vue-point) - [Job
      Board](https://vuejobs.com/?ref=vuejs) ## Contribution Please make sure to
      read the [Contributing
      Guide](https://github.com/vuejs/vue/blob/dev/.github/CONTRIBUTING.md)
      before making a pull request. If you have a Vue-related
      project/component/tool, add it with a pull request to [this curated
      list](https://github.com/vuejs/awesome-vue)! Thank you to all the people
      who already contributed to Vue!

      {{ '<' }}a href="https://github.com/vuejs/vue/graphs/contributors"{{ '>'
      }}{{ '<' }}img
      src="https://opencollective.com/vuejs/contributors.svg?width=890" /{{ '>'
      }}{{ '<' }}/a{{ '>' }}

      ## License [MIT](https://opensource.org/licenses/MIT) Copyright (c)
      2013-present, Yuxi (Evan) You
    </markdown>
    <pre class="server-rendered" *ngIf="!isBrowser" [innerHtml]="content"></pre>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 70%;
        margin: 2rem auto 0;
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
export class VueComponent implements OnInit, OnDestroy {
  isBrowser = false;
  content = `<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo"></a></p>

<p align="center">
  <a href="https://circleci.com/gh/vuejs/vue/tree/dev"><img src="https://img.shields.io/circleci/project/github/vuejs/vue/dev.svg?sanitize=true" alt="Build Status"></a>
  <a href="https://codecov.io/github/vuejs/vue?branch=dev"><img src="https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg?sanitize=true" alt="Coverage Status"></a>
  <a href="https://npmcharts.com/compare/vue?minimal=true"><img src="https://img.shields.io/npm/dm/vue.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/v/vue.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/vue.svg?sanitize=true" alt="License"></a>
  <a href="https://chat.vuejs.org/"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg?sanitize=true" alt="Chat"></a>
</p>

## This repo is for Vue 2

You are looking at the repository for Vue 2. The repo for Vue 3 is [vuejs/core](https://github.com/vuejs/core).

## Sponsors

Vue.js is an MIT-licensed open source project with its ongoing development made possible entirely by the support of these awesome [backers](https://github.com/vuejs/core/blob/main/BACKERS.md). If you'd like to join them, please consider [ sponsor Vue's development](https://vuejs.org/sponsor/).

<p align="center">
  <a target="_blank" href="https://vuejs.org/sponsor/">
    <img alt="sponsors" src="https://sponsors.vuejs.org/sponsors.svg">
  </a>
</p>

---

## Introduction

Vue (pronounced \`/vjuː/\`, like view) is a **progressive framework** for building user interfaces. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a framework depending on different use cases. It consists of an approachable core library that focuses on the view layer only, and an ecosystem of supporting libraries that helps you tackle complexity in large Single-Page Applications.

#### Browser Compatibility

Vue.js supports all browsers that are [ES5-compliant](https://kangax.github.io/compat-table/es5/) (IE8 and below are not supported).

## Ecosystem

| Project               | Status                                                       | Description                                             |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| [vue-router]          | [![vue-router-status]][vue-router-package]                   | Single-page application routing                         |
| [vuex]                | [![vuex-status]][vuex-package]                               | Large-scale state management                            |
| [vue-cli]             | [![vue-cli-status]][vue-cli-package]                         | Project scaffolding                                     |
| [vue-loader]          | [![vue-loader-status]][vue-loader-package]                   | Single File Component (\`*.vue\` file) loader for webpack |
| [vue-server-renderer] | [![vue-server-renderer-status]][vue-server-renderer-package] | Server-side rendering support                           |
| [vue-class-component] | [![vue-class-component-status]][vue-class-component-package] | TypeScript decorator for a class-based API              |
| [vue-rx]              | [![vue-rx-status]][vue-rx-package]                           | RxJS integration                                        |
| [vue-devtools]        | [![vue-devtools-status]][vue-devtools-package]               | Browser DevTools extension                              |

[vue-router]: https://github.com/vuejs/vue-router
[vuex]: https://github.com/vuejs/vuex
[vue-cli]: https://github.com/vuejs/vue-cli
[vue-loader]: https://github.com/vuejs/vue-loader
[vue-server-renderer]: https://github.com/vuejs/vue/tree/dev/packages/vue-server-renderer
[vue-class-component]: https://github.com/vuejs/vue-class-component
[vue-rx]: https://github.com/vuejs/vue-rx
[vue-devtools]: https://github.com/vuejs/vue-devtools
[vue-router-status]: https://img.shields.io/npm/v/vue-router.svg
[vuex-status]: https://img.shields.io/npm/v/vuex.svg
[vue-cli-status]: https://img.shields.io/npm/v/@vue/cli.svg
[vue-loader-status]: https://img.shields.io/npm/v/vue-loader.svg
[vue-server-renderer-status]: https://img.shields.io/npm/v/vue-server-renderer.svg
[vue-class-component-status]: https://img.shields.io/npm/v/vue-class-component.svg
[vue-rx-status]: https://img.shields.io/npm/v/vue-rx.svg
[vue-devtools-status]: https://img.shields.io/chrome-web-store/v/nhdogjmejiglipccpnnnanhbledajbpd.svg
[vue-router-package]: https://npmjs.com/package/vue-router
[vuex-package]: https://npmjs.com/package/vuex
[vue-cli-package]: https://npmjs.com/package/@vue/cli
[vue-loader-package]: https://npmjs.com/package/vue-loader
[vue-server-renderer-package]: https://npmjs.com/package/vue-server-renderer
[vue-class-component-package]: https://npmjs.com/package/vue-class-component
[vue-rx-package]: https://npmjs.com/package/vue-rx
[vue-devtools-package]: https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd

## Documentation

To check out [live examples](https://vuejs.org/v2/examples/) and docs, visit [vuejs.org](https://vuejs.org).

## Questions

For questions and support please use [the official forum](https://forum.vuejs.org) or [community chat](https://chat.vuejs.org/). The issue list of this repo is **exclusively** for bug reports and feature requests.

## Issues

Please make sure to read the [Issue Reporting Checklist](https://github.com/vuejs/vue/blob/dev/.github/CONTRIBUTING.md#issue-reporting-guidelines) before opening an issue. Issues not conforming to the guidelines may be closed immediately.

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/vuejs/vue/releases).

## Stay In Touch

- [Twitter](https://twitter.com/vuejs)
- [Blog](https://medium.com/the-vue-point)
- [Job Board](https://vuejobs.com/?ref=vuejs)

## Contribution

Please make sure to read the [Contributing Guide](https://github.com/vuejs/vue/blob/dev/.github/CONTRIBUTING.md) before making a pull request. If you have a Vue-related project/component/tool, add it with a pull request to [this curated list](https://github.com/vuejs/awesome-vue)!

Thank you to all the people who already contributed to Vue!

<a href="https://github.com/vuejs/vue/graphs/contributors"><img src="https://opencollective.com/vuejs/contributors.svg?width=890" /></a>

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2013-present, Yuxi (Evan) You
`;

  constructor(
    @Inject(PLATFORM_ID) public platformId: Object,
    private markdownService: MarkdownService,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);

    this.meta.addTag({ property: 'oh:title', content: 'Vue' });
    this.meta.addTag({ property: 'oh:type', content: 'article' });
    this.meta.addTag({
      property: 'oh:url',
      content: 'https://aleksanderbodurri-eefbe.web.app/posts/vue',
    });
    this.meta.addTag({
      property: 'oh:image',
      content: 'https://aleksanderbodurri-eefbe.web.app/assets/alex.png',
    });

    if (true) {
      this.meta.addTag({ name: 'description', content: 'Vue is cool.' });
    }

    if (true) {
      this.meta.addTag({ name: 'keywords', content: 'blog,post,Vue' });
    }

    if (!this.isBrowser) {
      this.content = this.markdownService.compile(this.content);
    }
  }

  ngOnDestroy(): void {
    this.meta.removeTag('property=oh:title');
    this.meta.removeTag('property=oh:type');
    this.meta.removeTag('property=oh:url');
    this.meta.removeTag('property=oh:image');

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
        component: VueComponent,
      },
    ]),
    MarkdownModule.forChild(),
  ],
  declarations: [VueComponent],
  bootstrap: [],
})
export class LazyModule {}
