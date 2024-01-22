import { Component, OnInit } from '@angular/core';
import { TelegramAuthDTO } from 'cy-domain/src/subject/domain-data/user/user-authentification/a-params';
import { UserAttrs } from 'cy-domain/src/subject/domain-data/user/params';
import { AppState } from './shared/states/app-state';

@Component({
  selector: 'app-component',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class AppComponent implements OnInit {
  appMode: 'mobile' | 'browser' = 'browser';

  currentUser: UserAttrs | undefined = undefined;

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(private appState: AppState) { }

  ngOnInit(): void {
    this.appState.appMode$.subscribe((mode) => {
      this.appMode = mode;
    });
    this.appState.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
  }
}
