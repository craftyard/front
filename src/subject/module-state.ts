import { DomainModuleState } from '../app/shared/states/domain-module-state';
import { TreeItem } from '../app/entities/tree-item/model/type';

export class SubjectModuleState implements DomainModuleState {
  private treeItems:TreeItem[] = [
    { title: 'сотрудники', routerLink: 'subject' },
  ];

  getTreeItems(): TreeItem[] {
    return this.treeItems;
  }
}
