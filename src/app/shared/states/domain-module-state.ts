import { TreeItem } from 'app/entities/tree-item/model/type';

export interface DomainModuleState {
  getTreeItems(): TreeItem[]
}
