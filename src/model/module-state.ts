import { TreeItem } from '../app/entities/tree-item/model/type';
import { DomainModuleState } from '../app/shared/states/domain-module-state';

export class ModelModuleState implements DomainModuleState {
  private treeItems:TreeItem[] = [
    { title: 'модели', routerLink: 'models' },
  ];

  getTreeItems(): TreeItem[] {
    return this.treeItems;
  }
}
