import { NgModule } from '@angular/core';
import { AppSharedModule } from 'src/app/shared';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  imports: [AppSharedModule],
  declarations: [UserCardComponent],
  exports: [UserCardComponent],
})
export class MainPageSharedModule {}
