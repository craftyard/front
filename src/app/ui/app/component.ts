import { Component, OnInit } from '@angular/core';
import { User } from 'workshop/features/login/model/type';
import { AppState } from '../../model/app-state';

@Component({
  selector: 'app-component',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class AppComponent implements OnInit {
  appMode: 'mobile' | 'browser' = 'browser';

  appUser: User | undefined = undefined;

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
