import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {
  AuthRootComponent,
  EmailAuthComponent,
  LoginComponent,
} from './components';
import { CreateEmailComponent } from './components/create-email';
const authenticationRoutes: Routes = [
  {
    path: 'authentication',
    component: AuthRootComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'email-auth', component: EmailAuthComponent },
      { path: 'create-email', component: CreateEmailComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(authenticationRoutes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
