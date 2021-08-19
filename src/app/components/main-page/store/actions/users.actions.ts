import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { IProfile, IUser } from '../../core';

export const GetUsers = createAction('Get Users');

export const GetUsersSuccess = createAction(
  'Get Users Success',
  props<{ users: IUser[] }>()
);

export const GetUsersFailure = createAction(
  'Get Users Failure',
  props<{ error: HttpErrorResponse }>()
);

export const AddToFavorite = createAction(
  'Add To Favorite',
  props<{ user: IUser }>()
);

export const AddToFavoriteSuccess = createAction(
  'Add To Favorite Success',
  props<{ user: IUser }>()
);

export const AddToFavoriteFailure = createAction(
  'Add To Favorite Failure',
  props<{ error: HttpErrorResponse }>()
);

export const GetFavoriteUsers = createAction('Get Favorite Users');

export const GetFavoriteUsersSuccess = createAction(
  'Get Favorite Users Success',
  props<{ users: IUser[] }>()
);

export const GetFavoriteUsersFailure = createAction(
  'Get Favorite Users Failure',
  props<{ error: HttpErrorResponse }>()
);
