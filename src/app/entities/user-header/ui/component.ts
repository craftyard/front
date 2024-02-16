import { Component, OnInit } from '@angular/core';
import { CurrentUser } from 'cy-domain/src/subject/domain-data/user/get-current-user/s-params';
import { AppState } from '../../../shared/states/app-state';

@Component({
  selector: 'current-user',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class CurrentUserComponent implements OnInit {
  currentUser: CurrentUser | undefined = undefined;

  constructor(private appState: AppState) { }

  ngOnInit(): void {
    this.appState.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
  }
}
