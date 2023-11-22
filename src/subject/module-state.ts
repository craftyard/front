import { DomainModuleState } from '../app/pages/app-page/model/domain-module-state';
import { TreeItem } from '../app/entities/tree-item/model/type';

export class SubjectModuleState implements DomainModuleState {
  private treeItems:TreeItem[] = [
    { title: 'сотрудники', routerLink: 'subjectpage' },
  ];

  getTreeItems(): TreeItem[] {
    return this.treeItems;
  }
}
