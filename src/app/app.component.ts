import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
 
  ngOnInit(): void {
    console.log('hello');
  }
  shouldShowElement: boolean = false;

  constructor() {
    this.updateShouldShowElement();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateShouldShowElement();
  }

  private updateShouldShowElement(): void {
    this.shouldShowElement = window.innerWidth > 768;
  }

}
