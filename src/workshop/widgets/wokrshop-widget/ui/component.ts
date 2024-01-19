/* eslint-disable no-useless-constructor */
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { GetMyWorkshopActionDod, GetMyWorkshopServiceParams } from 'cy-domain/src/workshop/domain-data/workshop/get-my-workshop/s-params';

import { GetUsersActionDod, GetingUsersServiceParams } from 'cy-domain/src/subject/domain-data/user/get-users/s-params';
import { UserAttrs } from 'cy-domain/src/subject/domain-data/user/params';
import { WorkshopAttrs } from 'cy-domain/src/workshop/domain-data/workshop/params';
import { WorkshopApi } from '../../../shared/backend-api/workshop-api.service';
import { SubjectApi } from '../../../../subject/shared/backend-api/subject-api.service';
import { AlertComponent } from '../../../../app/shared/ui-kit/alert/component';
import { AddModelComponent } from '../../../feature/add-model/ui/component';

@Component({
  selector: 'workshop-widget',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class WorkshopWidgetComponent implements OnInit {
  constructor(
  public dialog: MatDialog,
  private workshopApi: WorkshopApi,
  private subjectApi: SubjectApi,
   private alert:AlertComponent,
  ) {}

  workshopData!: WorkshopAttrs;

  users!:UserAttrs[];

  openDialog() {
    const dialogRef = this.dialog.open(AddModelComponent);
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
    if (result.isFailure()) {
      const err = result.value;
      if (err.name === 'WorkshopForUserDoesntExistError') {
        this.alert.openSnackBar(err.locale.text);
      }
    }
  }
}
