import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'Farmer\'s';
}
