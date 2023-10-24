import { Component, OnInit, HostListener } from '@angular/core';
import { AppState } from 'features/service/AppState.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  AppMode: 'mobile' | 'browser' = 'browser'; 
  
  constructor(private resizeService: AppState) {}
  ngOnInit(): void {
    this.resizeService.appMode.subscribe((Show) => {
      this.AppMode = Show;
    });
  }

}
