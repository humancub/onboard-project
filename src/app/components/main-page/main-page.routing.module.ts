import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../authentication/core/services/auth.guard';
import { MainPageRootComponent, ProfileComponent } from './components';
import { FavoriteUsersComponent } from './components/favorite-users/favorite-users.component';
import { UsersComponent } from './components/users/users.component';

const MainPageRoutes: Routes = [
  {
    path: 'main-page',
    component: MainPageRootComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'favorite-users', component: FavoriteUsersComponent },
      { path: 'profile/:id', component: ProfileComponent },
      { path: '', redirectTo: '/users', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(MainPageRoutes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
