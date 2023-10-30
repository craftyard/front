import { Component, OnInit } from '@angular/core';
import { AppState } from 'app/model/app-state';

@Component({
  selector: 'workshop',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class WorkshopComponent implements OnInit {
  appMode: 'mobile' | 'browser' = 'browser';

  // eslint-disable-next-line no-empty-function, no-useless-constructor
  constructor(private appState: AppState) {}

  ngOnInit(): void {
    this.appState.appMode$.subscribe((mode) => {
      this.appMode = mode;
    });
  }
}
