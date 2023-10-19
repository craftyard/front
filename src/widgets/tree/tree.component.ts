import { Component } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {
   menuItem = [
    {title:'мастерская', routerLink: '/workshop'},
    {title:'комнаты', routerLink: '/tools'},
    
   ]
   
}
