import { Component } from '@angular/core';
import { AppState } from 'app/model/app-state';
import { User } from 'workshop/features/login/model/type';

@Component({
  selector: 'current-user',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class CurrentUserComponent {
  appUser: User | undefined = undefined;

  constructor(private appState: AppState) {
    this.appState.appUser$.subscribe((user) => {
      this.appUser = user;
    });
  }
}
