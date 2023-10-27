import { Component } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './app-tree.component.html',
  styleUrls: ['./app-tree.component.css'],
})
export class AppTreeComponent {
  menuItem = [
    { title: 'мастерская', routerLink: '/workshop' },
  ];
}
