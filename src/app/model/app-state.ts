import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'workshop/features/login/model/type';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  public appMode$ = new BehaviorSubject<'mobile' | 'browser'>('browser');

  public appUser$ = new BehaviorSubject<User | undefined>(undefined);

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

  public setUser(user: User): void {
    this.appUser$.next(user || undefined);
    console.log(this.appUser$);
  }
}
