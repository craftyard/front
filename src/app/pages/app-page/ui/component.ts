import { Component, OnInit } from '@angular/core';
import { TelegramAuthDTO } from 'cy-domain/src/subject/domain-data/user/user-authentification/a-params';
import { AppState } from '../../../shared/states/app-state';

@Component({
  selector: 'app-page',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class AppPageComponent implements OnInit {
  appMode: 'mobile' | 'browser' = 'browser';

  appUser: TelegramAuthDTO | undefined = undefined;

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(private appState: AppState) {
    this.appState.appUser$.subscribe((user) => {
      this.appUser = user;
    });
  }

  ngOnInit(): void {
    this.appState.appMode$.subscribe((mode) => {
      this.appMode = mode;
    });
  }
}
