import { NgModule } from '@angular/core';
import { MainPageRoutingModule } from './main-page.routing.module';
import { MainPageComponentsModule } from './components';

@NgModule({
  imports: [MainPageRoutingModule, MainPageComponentsModule],
})
export class MainPageModule {}
