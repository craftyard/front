import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { CurrentUser } from 'cy-domain/src/subject/domain-data/user/get-current-user/s-params';
import { TreeItem } from '../../entities/tree-item/model/type';
import { DomainModuleState } from './domain-module-state';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  public appMode$ = new BehaviorSubject<'mobile' | 'browser'>('browser');

  public currentUser$ = new BehaviorSubject<CurrentUser | undefined>(undefined);


  public treeItems: TreeItem[] = [];

  constructor(private router: Router, @Inject('domainModuleStates') private moduleStates: DomainModuleState[]) {
    this.calculateAppMode();
    this.resizeListener();
    this.initAppState();
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

  public setAccessToken(accessToken: string): void {
    localStorage.setItem('accessToken', accessToken);
    this.router.navigate(['/myWorkshop']);
  }

  public setCurrentUser(currentUser: CurrentUser): void {
    const currentUserString = JSON.stringify(currentUser);
    localStorage.setItem('currentUser', currentUserString);
    this.currentUser$.next(currentUser);
  }


  public initAppState(): void {
    const userData = localStorage.getItem('currentUser');

    if (userData) {
      const user = JSON.parse(userData);
      this.currentUser$.next(user);
    }
  }

  public removeUser(): void {
    this.currentUser$.next(undefined);
    localStorage.clear();
    window.location.reload();
  }

  goLogin() {
    this.router.navigate(['/auth']);
  }
}
