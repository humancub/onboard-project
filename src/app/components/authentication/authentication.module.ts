import { NgModule } from '@angular/core';
import { AuthenticationRoutingModule } from './authentication.routing.module';
import { AuthenticationComponentsModule } from './components';

@NgModule({
  imports: [AuthenticationRoutingModule, AuthenticationComponentsModule],
})
export class AuthenticationModule {}
