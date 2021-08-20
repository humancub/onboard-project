import { Component } from '@angular/core';

@Component({
  selector: 'auth-root',
  styleUrls: ['./auth-root.component.scss'],
  template: `
    <div class="background-wrapper">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AuthRootComponent {
  constructor() {}
}
