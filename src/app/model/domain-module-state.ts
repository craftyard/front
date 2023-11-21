import { TreeItem } from '../entities/app-tree-item/model/type';

export interface DomainModuleState {
  getTreeItems(): TreeItem[]
}
