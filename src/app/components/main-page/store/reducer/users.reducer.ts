import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { IUser } from '../../core';
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
} from '../actions/users.actions';

export interface IUserState {
  users: IUser[];
  favoriteUsers: IUser[];
  loading: boolean;
  error: HttpErrorResponse | null;
}
export const initialState: IUserState = {
  users: [],
  favoriteUsers: [],
  loading: true,
  error: null,
};

export const usersReducer = createReducer(
  initialState,
  on(GetUsers, AddToFavorite, GetFavoriteUsers, (state: IUserState) => ({
    ...state,
    loading: true,
  })),
  on(GetUsersSuccess, (state: IUserState, { users }) => ({
    ...state,
    loading: false,
    users,
  })),
  on(GetFavoriteUsersSuccess, (state: IUserState, { users }) => ({
    ...state,
    loading: false,
    favoriteUsers: users,
  })),

  on(AddToFavoriteSuccess, (state: IUserState, { user }) => ({
    ...state,
    loading: false,
  })),

  on(
    GetUsersFailure,
    AddToFavoriteFailure,
    GetFavoriteUsersFailure,
    (state: IUserState, { error }) => ({
      ...state,
      loading: false,
      error,
    })
  )
);
