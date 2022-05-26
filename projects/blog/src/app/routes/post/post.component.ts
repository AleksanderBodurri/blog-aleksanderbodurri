import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post, posts } from '../posts/define-post';

@Component({
    selector: 'blog-post',
    templateUrl: './post.component.html',
    styleUrls: [
        './post.component.scss'
    ]
})
export class PostComponent implements OnInit {
    posts = posts
    slug: string|undefined = '';
    post: Post|undefined;

    pathsLoaded = 0;

    constructor(private _route: ActivatedRoute) {}

    ngOnInit() {
        this.slug = this._route.snapshot.paramMap.get('slug') ?? undefined;

        if (this.slug) {
            this.post = posts.find(post => post.slug === this.slug);
        }
    }

    pathIsReady() {
        this.pathsLoaded++;

        if (this.pathsLoaded === this.post?.contentPaths.length) {
            this.scrollToFragment();
        }
    }

    scrollToFragment() {
        const fragment = this._route.snapshot.fragment;
        if (!fragment) {
            return;
        }

        const element = document.querySelector(`#${fragment}`);
        if (element) {
            setTimeout(() => element.scrollIntoView());
        }
    }
}