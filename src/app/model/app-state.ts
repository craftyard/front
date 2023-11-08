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
    this.loadUser();
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
    this.appUser$.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  private loadUser(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.appUser$.next(user);
    }
  }
  public removeUser(): void {
    this.appUser$.next(undefined);
    localStorage.removeItem('user');
  }
}
