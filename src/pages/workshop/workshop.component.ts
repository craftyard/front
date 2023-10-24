import { Component, OnInit } from '@angular/core';
import { AppState } from 'features/service/AppState.service';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent implements OnInit {

  AppMode: 'mobile' | 'browser' = 'browser'; 
  
  constructor(private resizeService: AppState) {}
  ngOnInit(): void {
    this.resizeService.appMode.subscribe((Show) => {
      this.AppMode = Show;
    });
  }
}
2