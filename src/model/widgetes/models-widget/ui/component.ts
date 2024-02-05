import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppState } from '../../../../app/shared/states/app-state';
import { AddModelComponent } from '../../../feature/add-model/ui/component';

@Component({
  selector: 'models-widget',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class ModelsWidgetComponent implements OnInit {
  appMode: 'mobile' | 'browser' = 'browser';

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(private appState: AppState, public dialog: MatDialog) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddModelComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Form values:', result);
    });
  }

  ngOnInit(): void {
    this.appState.appMode$.subscribe((mode) => {
      this.appMode = mode;
    });
  }
}
