import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TreeItemComponent } from './component';

describe('TreeItemComponent', () => {
  let component: TreeItemComponent;
  let fixture: ComponentFixture<TreeItemComponent>;
  let treeDebug: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreeItemComponent],
      imports: [RouterTestingModule],
    });

    fixture = TestBed.createComponent(TreeItemComponent);
    component = fixture.componentInstance;
    treeDebug = fixture.debugElement.query(By.css('.menu-title'));
    el = treeDebug.nativeElement;

    component.treeItem = { title: 'мастерская', routerLink: '/workpage' };
    fixture.detectChanges();
  });

  it('title должен отображаться в верхнем регистре', () => {
    const res = component.treeItem.title[0].toUpperCase() + component.treeItem.title.slice(1);
    expect(el.textContent).toContain(res);
  });
  it('Должны отображаться title и routerLink.', () => {
    component.treeItem = { title: 'профиль', routerLink: '/profile' };
    fixture.detectChanges();
    expect(component.treeItem.title).toBe('профиль');
    expect(component.treeItem.routerLink).toBe('/profile');
  });
});
