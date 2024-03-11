/* eslint-disable no-useless-constructor */
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkshopOutAttrs } from 'cy-domain/src/workshop/domain-data/workshop/params';
import { FindWorkshopByUserIdActionDod, FindWorkshopByUserIdServiceParams } from 'cy-domain/src/workshop/domain-data/workshop/find-workshop-by-user-id/s-params';
import { WorkshopApi } from '../../../shared/backend-api/workshop-api.service';
import { AlertComponent } from '../../../../app/shared/ui-kit/alert/component';
import { AppState } from '../../../../app/shared/states/app-state';

@Component({
  selector: 'workshop-widget',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class WorkshopWidgetComponent implements OnInit {
  constructor(
  public dialog: MatDialog,
  private workshopApi: WorkshopApi,
   private alert:AlertComponent,
   private appState: AppState,
  ) {}

  workshopData: WorkshopOutAttrs| undefined = undefined;

  CurrentUserID: string | undefined = undefined;

  async ngOnInit(): Promise<void> {
    this.appState.currentUser$.subscribe((user) => {
      this.CurrentUserID = user?.userId;
    });
    if (this.CurrentUserID) {
      const actionDod: FindWorkshopByUserIdActionDod = {
        meta: {
          name: 'findWorkshopByUserId',
          actionId: crypto.randomUUID(),
          domainType: 'action',
        },
        attrs: {
          userId: this.CurrentUserID,
        },
      };
      const result = await this.workshopApi.request<FindWorkshopByUserIdServiceParams>(actionDod);
      if (result.isSuccess()) {
        this.workshopData = result.value;
      }
      if (result.isFailure()) {
        const err = result.value;
        this.alert.openSnackBar(err.locale.text);
      }
    }
  }
}
