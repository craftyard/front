import { Component } from '@angular/core';
import { TelegramAuthDTO } from 'cy-domain/src/subject/domain-data/user/user-authentification/a-params';
import { AppState } from '../../../shared/states/app-state';

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
