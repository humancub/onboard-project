import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IUserState, loading } from '../../store';
import { AuthenticationService } from 'src/app/components/authentication/core';

@Component({
  selector: 'main-page-root',
  styleUrls: ['./main-page-root.component.scss'],
  template: `
    <mat-drawer-container class="container">
      <mat-drawer class="drawer" mode="side" opened>
        <div class="aside">
          <button
            class="nav-item"
            mat-flat-button
            routerLink="/main-page/users"
            [routerLinkActive]="'is-active'"
          >
            <mat-icon>supervised_user_circle</mat-icon>
            List of users
          </button>

          <button
            class="nav-item"
            mat-flat-button
            routerLink="/main-page/favorite-users"
            [routerLinkActive]="'is-active'"
          >
            <mat-icon>favorite_border</mat-icon>
            Favorite Users
          </button>
          <button
            class="nav-item"
            mat-flat-button
            (click)="logout()"
            [routerLinkActive]="'is-active'"
          >
            <mat-icon>exit_to_app</mat-icon>
            Log out
          </button>
        </div>
      </mat-drawer>
      <div class="background-wrapper">
        <div class="spinner" *ngIf="loading$ | async">
          <mat-spinner color="accent"></mat-spinner>
        </div>

        <router-outlet></router-outlet>
      </div>
    </mat-drawer-container>
  `,
})
export class MainPageRootComponent {
  public loading$: Observable<boolean> = this.store.select(loading);
  constructor(
    private store: Store<IUserState>,
    private authenticationService: AuthenticationService
  ) {}

  public logout(): void {
    this.authenticationService.logout();
  }
}
