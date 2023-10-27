import { Component, OnInit } from '@angular/core';
import { AppState } from 'features/service/AppState.service';

@Component({
  selector: 'workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css'],
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
