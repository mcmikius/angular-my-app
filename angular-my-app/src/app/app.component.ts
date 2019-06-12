import {Component} from '@angular/core';
import {NewServiceService} from "./new-service.service";

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Angular routes</h1>
      <nav>
        <a routerLink="">Main</a>
        <a routerLink="/about">About us</a>
        <a routerLink="/news">News</a>
        <a routerLink="/price">Price</a>
      </nav>
      <router-outlet></router-outlet>
    </div>`
})
export class AppComponent {
  title = 'My Developer Blog';

  constructor(svc: NewServiceService) {
    svc.consoleText("Hello world");
  }
}
