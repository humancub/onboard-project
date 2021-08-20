import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppSharedModule } from 'src/app/shared';
import { CreateEmailComponent } from './create-email';
import { EmailAuthComponent } from './email-auth';
import { LoginComponent } from './login';
import { AuthRootComponent } from './root';

const COMPONENTS = [
  AuthRootComponent,
  LoginComponent,
  EmailAuthComponent,
  CreateEmailComponent,
];

@NgModule({
  imports: [RouterModule, AppSharedModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class AuthenticationComponentsModule {}
