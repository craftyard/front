import { Component, OnInit } from '@angular/core';
import { AppState } from '@app/model/app-state';

@Component({
  selector: 'app-component',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
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
