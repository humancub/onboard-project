import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  AddToFavorite,
  GetUsers,
  isFavoriteUser,
  IUserState,
  loading,
  users,
} from '../../store';
import { IUser } from '../../core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  public loading$: Observable<boolean> = this.store.select(loading);
  public users$: Observable<IUser[]> = this.store.select(users);

  private destroy$ = new Subject();

  constructor(private store: Store<IUserState>, public router: Router) {}

  public addToFavorite(user: IUser) {
    this.store.dispatch(AddToFavorite({ user }));
  }

  public toProfilePage(user: IUser) {
    this.router.navigate([`main-page/profile/${user.id}`]);
  }

  public isFavoriteUser(id: string): Observable<boolean> {
    return this.store.select(isFavoriteUser(id));
  }

  ngOnInit(): void {
    this.store.dispatch(GetUsers());
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
