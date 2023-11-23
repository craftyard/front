import { Component, OnInit } from '@angular/core';
import { AppState } from 'app/shared/states/app-state';
import { TreeItem } from 'app/entities/tree-item/model/type';

@Component({
  selector: 'app-tree',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class AppTreeComponent implements OnInit {
  constructor(private appState: AppState) { }

  menuItems: TreeItem[] = [];

  ngOnInit(): void {
    this.menuItems = this.appState.treeItems;
  }
}
