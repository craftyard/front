import { Component, Input } from '@angular/core';
import { TreeItem } from 'app/entities/app-tree-item/model/type';

@Component({
  selector: 'app-tree-item',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class AppTreeItemComponent {
  @Input() treeItem!:TreeItem;
}
