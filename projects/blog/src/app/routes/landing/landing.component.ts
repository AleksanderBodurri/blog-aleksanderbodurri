import { Component, OnInit } from '@angular/core';
import { posts } from '../posts/define-post';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: [
    './landing.component.scss'
  ]
})
export class LandingComponent implements OnInit {
  posts = posts.slice(0, 3);
  constructor() {}
  ngOnInit(): void {}
}