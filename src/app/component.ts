import { Component, OnInit } from '@angular/core';
import { AppState } from 'app/shared/states/app-state';
import { TelegramAuthDTO } from 'cy-domain/src/subject/domain-data/user/user-authentification/a-params';

@Component({
  selector: 'app-component',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class AppComponent implements OnInit {
  appMode: 'mobile' | 'browser' = 'browser';

  appUser: TelegramAuthDTO | undefined = undefined;

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(private appState: AppState) { }

  ngOnInit(): void {
    this.appState.appMode$.subscribe((mode) => {
      this.appMode = mode;
    });
    this.appState.appUser$.subscribe((user) => {
      this.appUser = user;
    });
  }
}
