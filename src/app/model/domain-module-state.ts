import { TreeItem } from '../entities/tree-item/model/type';

export interface DomainModuleState {
  getTreeItems(): TreeItem[]
}
