import { Component, OnInit } from '@angular/core';
import { AppState } from 'app/model/app-state';
import { TelegramAuthDTO } from 'workshop-domain/src/subject/domain-data/user/user-authentification.a-params';

@Component({
  selector: 'app-warapper',
  templateUrl: './warapper.component.html',
  styleUrls: ['./warapper.component.css']
})
export class WarapperComponent implements OnInit {
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
