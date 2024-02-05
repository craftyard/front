import { Component, OnInit } from '@angular/core';
import { UserAttrs } from 'cy-domain/src/subject/domain-data/user/params';
import { AppState } from '../../../shared/states/app-state';

@Component({
  selector: 'app-page',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class AppPageComponent implements OnInit {
  appMode: 'mobile' | 'browser' = 'browser';

  currentUser: UserAttrs | undefined = undefined;

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(private appState: AppState) {
    this.appState.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
  }

  ngOnInit(): void {
    this.appState.appMode$.subscribe((mode) => {
      this.appMode = mode;
    });
  }
}
