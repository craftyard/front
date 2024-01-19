import { TreeItem } from "../app/entities/tree-item/model/type";
import { DomainModuleState } from "../app/shared/states/domain-module-state";


export class WorkShopModuleState implements DomainModuleState {
  private treeItems:TreeItem[] = [
    { title: 'мастерская', routerLink: 'myWorkshop' },
  ];

  getTreeItems(): TreeItem[] {
    return this.treeItems;
  }
}
