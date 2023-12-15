import { Component } from '@angular/core';
import { AppState } from 'app/shared/states/app-state';
import { TelegramAuthDTO } from 'app/shared/user/telegram-auth-dto';

@Component({
  selector: 'current-user',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class CurrentUserComponent {
  appUser: TelegramAuthDTO | undefined = undefined;

  constructor(private appState: AppState) {
    this.appState.appUser$.subscribe((user) => {
      this.appUser = user;
    });
  }
}
