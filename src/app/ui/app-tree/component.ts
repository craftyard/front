import { Component } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class AppTreeComponent {
  menuItem = [
    { title: 'мастерская', routerLink: '/workshop' },
  ];
}
