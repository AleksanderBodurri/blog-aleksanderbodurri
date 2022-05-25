import { Component, OnInit } from '@angular/core';
import { commonPageStyles } from '../page.styles';

@Component({
  selector: 'app-landing',
  template: `
    <section>
      <aside>
          <figure>
              <img src="assets/alex2.png" alt="A picture of Alex Bodurri">
              <figcaption>Aleksander Bodurri (He/Him)</figcaption>
              <hr>
              <figcaption>Guy Who codes sometimes</figcaption>
              <hr>
              <figcaption>Angular Team Member</figcaption>
              <hr>
              <figcaption>Developer - Verto Health</figcaption>
              <hr>
            </figure>        
      </aside>
      <article>
        <ul>
          <li>
            <a href="#">Post 1.</a>
          </li>
          <li>
            <a href="#">Post 1.</a>
          </li>
          <li>
            <a href="#">Post 1.</a>
          </li>
        </ul>
      </article>
    </section>
  `,
  styles: [
    commonPageStyles,
    `
      section {
        display: flex;
        width: 75%;
        height: 100%;
        align-items: center;
        margin: auto;
        justify-content: center;

        aside {
          width: 280px;
        }

        article {
          width: 100%;

          ul {
            list-style: none;
              display: flex;
              flex-direction: column;
              gap: 2rem;
          }
        }
      }

      figure {
        width: 200px;
        border: 1px solid #3e3e3e;
        border-radius: 8px;
        padding: 1rem;

        figcaption {
          font-size: 0.75rem;
          text-align: center;
        }
        
        img {
          width: 200px;
          filter: brightness(1.1);
        }
      }
    `
  ]
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
