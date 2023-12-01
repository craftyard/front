import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppState } from 'app/shared/states/app-state';
import { MatListModule } from '@angular/material/list';
import { TreeItemComponent } from 'app/entities/tree-item/ui/component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppTreeComponent } from './component';

describe('AppTreeComponent', () => {
  let component: AppTreeComponent;
  let fixture: ComponentFixture<AppTreeComponent>;
  let mockAppState: Partial<AppState>;
  mockAppState = {
    treeItems: [
      { title: 'Мастерская', routerLink: '/workpage' },
      { title: 'Профиль', routerLink: '/subjectpage' },
    ],
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppTreeComponent, TreeItemComponent],
      providers: [{ provide: AppState, useValue: mockAppState }],
      imports: [MatListModule, RouterTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(AppTreeComponent);
    component = fixture.componentInstance;
  });

  it('компонент был создан', () => {
    expect(component).toBeTruthy();
  });

  it('В app-tree, который содержит массив menuItems, был добавлен mockAppState.treeItems ', () => {
    fixture.detectChanges();
    expect(component.menuItems).toEqual(mockAppState.treeItems!);
  });
  it('В tree-item (кнопка) были отправлены данные из компонента app-tree.', () => {
    fixture.detectChanges();
    const treeItemComponents = fixture.nativeElement.querySelectorAll('tree-item');
    treeItemComponents.forEach((item: any, index: number) => {
      const pText = mockAppState.treeItems![index].title;
      expect(item.textContent).toContain(pText);
    });

    expect(treeItemComponents.length).toEqual(mockAppState.treeItems!.length);
  });
});
