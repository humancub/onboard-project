import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root';
import { AuthenticationModule } from './authentication';
import { MainPageModule } from './main-page';

const COMPONENTS = [RootComponent];
const MODULES = [AuthenticationModule, MainPageModule];

@NgModule({
  imports: [CommonModule, RouterModule, ...MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS, ...MODULES],
})
export class RootComponentsModule {}
