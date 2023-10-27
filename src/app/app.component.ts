import { Component, OnInit } from '@angular/core';
import { AppState } from 'features/service/AppState.service';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  appMode: 'mobile' | 'browser' = 'browser';

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(private appState: AppState) {}

  ngOnInit(): void {
    this.appState.appMode$.subscribe((mode) => {
      this.appMode = mode;
    });
  }
}
