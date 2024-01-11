/* eslint-disable no-useless-constructor */
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddModelComponent } from 'workshop/feature/add-model/ui/component';
import { WorkshopApi } from 'workshop/shared/workshop-api.service';
import { GetMyWorkshopActionDod, GetMyWorkshopServiceParams } from 'cy-domain/src/workshop/domain-data/workshop/get-my-workshop/s-params';
import { SubjectApi } from 'subject/shared/backend-api/subject-api.service';
import { GetUsersActionDod, GetingUsersServiceParams } from 'cy-domain/src/subject/domain-data/user/get-users/s-params';
import { UserAttrs } from 'cy-domain/src/subject/domain-data/user/params';
import { WorkshopAttrs } from 'cy-domain/src/workshop/domain-data/workshop/params';

@Component({
  selector: 'workshop-widget',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class WorkshopWidgetsComponent implements OnInit {
  constructor(
  public dialog: MatDialog,
  private workshopApi: WorkshopApi,
  private subjectApi: SubjectApi,
  ) {}

  workshopData!: WorkshopAttrs;

  users!:UserAttrs[];

  openDialog() {
    const dialogRef = this.dialog.open(AddModelComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  async ngOnInit(): Promise<void> {
    const actionDod: GetMyWorkshopActionDod = {
      meta: {
        name: 'getMyWorkshop',
        actionId: crypto.randomUUID(),
        domainType: 'action',
      },
      attrs: {},
    };

    const result = await this.workshopApi.request<GetMyWorkshopServiceParams>(actionDod);
    if (result.isSuccess()) {
      this.workshopData = result.value;
      const getUsersActionDod: GetUsersActionDod = {
        meta: {
          name: 'getUsers',
          actionId: crypto.randomUUID(),
          domainType: 'action',
        },
        attrs: {
          userIds: result.value.employeesRole.userIds,
        },
      };
      const res = await this.subjectApi.request<GetingUsersServiceParams>(getUsersActionDod);
      if (res.isSuccess()) {
        this.users = res.value;
      }
    }
  }
}
