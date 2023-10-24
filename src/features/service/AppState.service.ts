import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  public appMode = new BehaviorSubject<'mobile' | 'browser'>('browser');
  
  constructor() {
    this.updateBrowserVersion();
    this.resizeListener();
  }

  private resizeListener(): void {
    window.addEventListener('resize', () => {
      this.updateBrowserVersion();
    });
  }

  private updateBrowserVersion(): void {
    this.appMode.next(window.innerWidth > 768 ? 'browser' : 'mobile');
  }
}