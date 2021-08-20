import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import {
  catchError,
  delay,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import { EndpointService, IUser } from '../../core';
import {
  AddToFavorite,
  AddToFavoriteFailure,
  AddToFavoriteSuccess,
  GetFavoriteUsers,
  GetFavoriteUsersFailure,
  GetFavoriteUsersSuccess,
  GetUsers,
  GetUsersFailure,
  GetUsersSuccess,
} from '../actions';
import { users } from '../selectors';

@Injectable()
export class UsersEffects {
  constructor(
    private store: Store<IUser>,
    private actions$: Actions,
    private endpointService: EndpointService
  ) {}

  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetUsers),
      switchMap(() => {
        return this.endpointService.getUsers().pipe(
          map((users: IUser[]) => {
            return GetUsersSuccess({ users: users });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(GetUsersFailure({ error: error }));
          })
        );
      })
    )
  );

  addToFavorite = createEffect(() =>
    this.actions$.pipe(
      ofType(AddToFavorite),
      withLatestFrom(this.store.select(users)),
      switchMap(([{ user }]) => {
        return from(this.endpointService.addToFavorite(user)).pipe(
          map(() => {
            return AddToFavoriteSuccess({ user });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(AddToFavoriteFailure({ error }));
          })
        );
      })
    )
  );

  getFavoriteUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetFavoriteUsers),
      switchMap(() => {
        return this.endpointService.getFavoriteUsers().pipe(
          map((users: IUser[]) => {
            return GetFavoriteUsersSuccess({ users: users });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(GetFavoriteUsersFailure({ error: error }));
          })
        );
      })
    )
  );
}
