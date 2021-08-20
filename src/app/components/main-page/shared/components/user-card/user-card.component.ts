import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../../core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user!: IUser;
  @Input() addToFavoriteAccessible: boolean = true;
  @Input() addToFavoriteDisabled: boolean = false;

  @Output() addedToFavorite = new EventEmitter<void>();

  public addToFavorite() {
    this.addedToFavorite.emit();
  }
}
