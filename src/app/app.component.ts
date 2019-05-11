import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <app-side-bar></app-side-bar>
        </div>  
        <div class="col-lg-10">
          <div class="container">
              <router-outlet></router-outlet>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Farmer\'s';
}
