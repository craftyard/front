import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { UserAttrs } from 'cy-domain/src/subject/domain-data/user/params';
import { TreeItem } from '../../entities/tree-item/model/type';
import { DomainModuleState } from './domain-module-state';

@Injectable({
  providedIn: 'root',
})
export class AppState {
  public appMode$ = new BehaviorSubject<'mobile' | 'browser'>('browser');

  public currentUser$ = new BehaviorSubject<UserAttrs | undefined>(undefined);

  public currentWorskhop$ = new BehaviorSubject<
  { name: string; workshopId: string } | undefined
  >(undefined);

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

  public setCurrentUser(currentUser: UserAttrs): void {
    const currentUserString = JSON.stringify(currentUser);
    localStorage.setItem('currentUser', currentUserString);
    this.currentUser$.next(currentUser);
  }

  public setCurrentWorskhop(currentWorskhop: { name: string, workshopId: string }): void {
    const currentWorkshopString = JSON.stringify(currentWorskhop);
    localStorage.setItem('currentWorskhop', currentWorkshopString);
    this.currentWorskhop$.next(currentWorskhop);
  }

  public initAppState(): void {
    const userData = localStorage.getItem('currentUser');
    const workshopData = localStorage.getItem('currentWorskhop');

    if ((userData !== null && workshopData !== null)) {
      const user = JSON.parse(userData);
      this.currentUser$.next(user);
      const workshop = JSON.parse(workshopData);
      this.currentWorskhop$.next(workshop);
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
