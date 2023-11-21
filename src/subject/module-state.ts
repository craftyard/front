import { DomainModuleState } from '../app/model/domain-module-state';
import { TreeItem } from '../app/model/type';

export class SubjectModuleState implements DomainModuleState {
  private treeItems:TreeItem[] = [
    { title: 'сотрудники', routerLink: 'subjectpage' },
  ];

  getTreeItems(): TreeItem[] {
    return this.treeItems;
  }
}
