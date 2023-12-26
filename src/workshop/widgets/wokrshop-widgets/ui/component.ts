import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddModelComponent } from 'workshop/feature/add-model/ui/component';

@Component({
  selector: 'workshop-widget',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class WorkshopWidgetsComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddModelComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
