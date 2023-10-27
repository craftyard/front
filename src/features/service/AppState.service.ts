import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  public appMode$ = new BehaviorSubject<'mobile' | 'browser'>('browser');

  constructor() {
    this.calculateAppMode();
    this.resizeListener();
  }

  private resizeListener(): void {
    window.addEventListener('resize', () => {
      this.calculateAppMode();
    });
  }

  private calculateAppMode(): void {
    this.appMode$.next(window.innerWidth > 768 ? 'browser' : 'mobile');
  }
}
