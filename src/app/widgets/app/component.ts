import { Component, OnInit } from '@angular/core';
import { AppState } from 'app/model/app-state';
import { TelegramAuthDTO } from 'workshop-domain/src/subject/domain-data/user/user-authentification.a-params';

@Component({
  selector: 'app-component',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class AppComponent implements OnInit {
  appMode: 'mobile' | 'browser' = 'browser';

  appUser: TelegramAuthDTO | undefined = undefined;

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
