import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { TreeItem } from 'app/entities/tree-item/model/type';
import { DomainModuleState } from 'app/shared/states/domain-module-state';
import { TelegramAuthDTO } from 'cy-domain/src/subject/domain-data/user/user-authentification/a-params';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  public appMode$ = new BehaviorSubject<'mobile' | 'browser'>('browser');

  public appUser$ = new BehaviorSubject<TelegramAuthDTO | undefined>(undefined);

  public treeItems: TreeItem[] = [];

  constructor(private router: Router, @Inject('domainModuleStates') private moduleStates: DomainModuleState[]) {
    this.calculateAppMode();
    this.resizeListener();
    this.loadUser();
    this.moduleStates.forEach((x) => this.treeItems.push(...x.getTreeItems()));
  }

  private resizeListener(): void {
    window.addEventListener('resize', () => {
      this.calculateAppMode();
    });
  }

  private calculateAppMode(): void {
    this.appMode$.next(window.innerWidth > 768 ? 'browser' : 'mobile');
  }

  public setUser(accessToken: string, user:TelegramAuthDTO): void {
    this.appUser$.next(user);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/myWorkshop']);
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
