import { Component, OnInit } from '@angular/core';
import { AppState } from 'features/service/AppState.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  AppMode: 'mobile' | 'browser' = 'browser';

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(private resizeService: AppState) {}

  ngOnInit(): void {
    this.resizeService.appMode.subscribe((Show) => {
      this.AppMode = Show;
    });
  }
}
