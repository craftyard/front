import { Component } from '@angular/core';
import { AppState } from 'app/pages/app-page/model/app-state';

@Component({
  selector: 'logout-button',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class LogOutComponent {
  constructor(private appState: AppState) { }

  logOut() {
    this.appState.removeUser();
  }
}
