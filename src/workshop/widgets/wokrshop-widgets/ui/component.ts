import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddModelComponent } from 'workshop/feature/add-model/ui/component';
import { AddTollComponent } from 'workshop/feature/add-tools/ui/component';

@Component({
  selector: 'workshop-widget',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class WorkshopWidgetsComponent {
  constructor(public dialog: MatDialog) {}

  menuItems = [
    { title: 'Добавить модель', link: AddModelComponent },
    { title: 'Добавить инструменты', link: AddTollComponent },
  ];

  menuData: string = 'Добавить модель';

  menuLink?: unknown;

  openDialog(menuLink: any = AddModelComponent): void {
    const dialogRef = this.dialog.open(menuLink);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  selectMenuItem(item: any): void {
    this.menuData = item.title;
    this.menuLink = item.link;
    this.openDialog(item.link);
  }
}
