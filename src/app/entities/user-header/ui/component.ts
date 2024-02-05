import { Component, OnInit } from '@angular/core';
import { UserAttrs } from 'cy-domain/src/subject/domain-data/user/params';
import { AppState } from '../../../shared/states/app-state';

@Component({
  selector: 'current-user',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class CurrentUserComponent implements OnInit {
  currentUser: UserAttrs | undefined = undefined;

  workshopName: {name:string, workshopId:string} | undefined = undefined;

  constructor(private appState: AppState) {

  }

  ngOnInit(): void {
    this.appState.currentWorskhop$.subscribe((workshopName) => {
    });
    this.appState.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
  }
}
