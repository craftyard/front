import { ModuleState } from '../app/model/module-state';
import { TreeItem } from '../app/model/type';

export class WorkShopModuleState implements ModuleState {
  private treeItems:TreeItem[] = [
    { title: 'мастерская', routerLink: 'workpage' },
  ];

  getTreeItems(): TreeItem[] {
    return this.treeItems;
  }
}
