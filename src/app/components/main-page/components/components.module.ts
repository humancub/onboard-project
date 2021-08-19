import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppSharedModule } from 'src/app/shared';
import {
  UsersComponent,
  FavoriteUsersComponent,
  ProfileComponent,
  MainPageRootComponent,
} from '.';

const COMPONENTS = [
  UsersComponent,
  FavoriteUsersComponent,
  ProfileComponent,
  MainPageRootComponent,
];

@NgModule({
  imports: [RouterModule, AppSharedModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class MainPageComponentsModule {}
