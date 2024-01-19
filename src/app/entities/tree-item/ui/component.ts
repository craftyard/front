import { Component, Input } from '@angular/core';
import { TreeItem } from '../model/type';

@Component({
  selector: 'tree-item',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class TreeItemComponent {
  @Input() treeItem!:TreeItem;
}
