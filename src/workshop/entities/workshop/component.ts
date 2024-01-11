import {
  ChangeDetectionStrategy,
  Component, Input, OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserAttrs } from 'cy-domain/src/subject/domain-data/user/params';
import { WorkshopAttrs } from 'cy-domain/src/workshop/domain-data/workshop/params';

@Component({
  selector: 'workshop-entity',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkshopComponent implements OnInit {
  @Input() workshopData!: WorkshopAttrs;

  @Input() users!:UserAttrs[];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.workshopData);
  }
}
