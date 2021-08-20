import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () =>
      import('../components/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'main-page',
    loadChildren: () =>
      import('../components/main-page/main-page.module').then(
        (m) => m.MainPageModule
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: '/authentication/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
