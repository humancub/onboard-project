import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { IUser } from '../../core';
import {
  favoriteUsers,
  GetFavoriteUsers,
  IUserState,
  loading,
} from '../../store';

@Component({
  selector: 'app-favorite-users',
  templateUrl: './favorite-users.component.html',
  styleUrls: ['./favorite-users.component.scss'],
})
export class FavoriteUsersComponent implements OnInit, OnDestroy {
  public users$: Observable<IUser[]> = this.store.select(favoriteUsers);
  public loading$: Observable<boolean> = this.store.select(loading);

  private destroy$ = new Subject();

  constructor(public router: Router, private store: Store<IUserState>) {}

  public toProfilePage(user: IUser) {
    this.router.navigate([`main-page/profile/${user.id}`]);
  }

  ngOnInit(): void {
    this.store.dispatch(GetFavoriteUsers());
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
