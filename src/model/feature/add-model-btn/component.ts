import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddModelComponent } from '../add-model/ui/component';

@Component({
  selector: 'add-model-btn',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class AddModelBtnComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddModelComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Form values:', result);
    });
  }
}
