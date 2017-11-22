import {DOCUMENT} from "@angular/common";
import {Component, Inject, LOCALE_ID, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1 title="Title" i18n i18n-title>Welcome to {{title}}!</h1>
      <img width="300" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==" i18n-title title="Angular logo">
    </div>
    <h2 i18n>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul>

    <p>
        <button (click)="inc(-1)">-</button> <button (click)="inc(1)">+</button>
        <span i18n>Plural ICU: {minutes, plural, =0 {just now} =1 {1 minute ago} other {{{minutes}} minutes ago}} (value: {{minutes}})</span>
    </p>

    <p i18n>Localized date: {{date | date:'full'}}</p>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
  date = new Date();
  minutes = 0;


  constructor(@Inject(DOCUMENT) doc: Document, @Inject(LOCALE_ID) locale: string, renderer: Renderer2) {
    console.log(`Using locale: ${locale}`);
    // set the "lang" attribute on the "<html>" element
    renderer.setAttribute(doc.documentElement, 'lang', locale);
  }

  inc(i: number) {
    this.minutes+=i;
  }
}
