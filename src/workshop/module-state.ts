import { DomainModuleState } from '../app/model/domain-module-state';
import { TreeItem } from '../app/model/type';

export class WorkShopModuleState implements DomainModuleState {
  private treeItems:TreeItem[] = [
    { title: 'мастерская', routerLink: 'workpage' },
  ];

  getTreeItems(): TreeItem[] {
    return this.treeItems;
  }
}
