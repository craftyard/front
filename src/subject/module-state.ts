import { ModuleState } from '../app/model/module-state';
import { TreeItem } from '../app/model/type';

export class SubjectModuleState implements ModuleState {
  private treeItems:TreeItem[] = [
    { title: 'сотрудники', routerLink: 'subjectpage' },
  ];

  getTreeItems(): TreeItem[] {
    return this.treeItems;
  }
}
