import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TelegramAuthDTO } from 'workshop-domain/src/subject/domain-data/user/user-authentification.a-params';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  public appMode$ = new BehaviorSubject<'mobile' | 'browser'>('browser');

  public appUser$ = new BehaviorSubject<TelegramAuthDTO | undefined>(undefined);

  constructor(private router: Router) {
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

  public setUser(user: TelegramAuthDTO): void {
    this.appUser$.next(user);
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/workpage']);
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
    localStorage.clear();
    window.location.reload();
  }

  goLogin() {
    this.router.navigate(['/auth']);
  }
}
