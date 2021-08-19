import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUser } from '../../core';
import { IUserState } from '../reducer';

export const usersReducerSelector =
  createFeatureSelector<IUserState>('usersReducer');

export const users = createSelector(
  usersReducerSelector,
  (state: IUserState) => state.users
);

export const favoriteUsers = createSelector(
  usersReducerSelector,
  (state: IUserState) => state.favoriteUsers
);

export const isFavoriteUser = (id: string) =>
  createSelector(favoriteUsers, (users: IUser[]) =>
    users.some((el) => el.id === id)
  );

export const loading = createSelector(
  usersReducerSelector,
  (state: IUserState) => state.loading
);
