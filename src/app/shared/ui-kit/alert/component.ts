import { Component } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'alert',
  templateUrl: 'content.html',
  styleUrls: ['style.css'],
})
export class AlertComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';

  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(text:string) {
    this.snackBar.open(text, 'Закрыть', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['custom-snackbar', 'snackbar-success'],
    });
  }
}
