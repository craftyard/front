import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetWorkshopModelsActionDod, GetingWorkshopModelsServiceParams } from 'cy-domain/src/model/domain-data/model/get-models/s-params';
import { ModelBackendApiMock } from '../../../shared/backend-api/model-backend-mock';
import { AddModelComponent } from '../../../feature/add-model/ui/component';
import { AppState } from '../../../../app/shared/states/app-state';

@Component({
  selector: 'models-widget',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class ModelsWidgetComponent implements OnInit {
  appMode: 'mobile' | 'browser' = 'browser';

  workshopId : string | undefined = undefined;

  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(
    private appState: AppState,
    public dialog: MatDialog,
    private mockModelApi:ModelBackendApiMock,
  ) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddModelComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Form values:', result);
    });
  }

  async ngOnInit(): Promise<void> {
    this.appState.appMode$.subscribe((mode) => {
      this.appMode = mode;
    });
    const actionDod: GetWorkshopModelsActionDod = {
      meta: {
        name: 'getWorkshopModels',
        actionId: crypto.randomUUID(),
        domainType: 'action',
      },
      attrs: {
        workshopId: 's',
      },
    };
    const modelsResult = await this.mockModelApi.request<
    GetingWorkshopModelsServiceParams>(actionDod);
    if (modelsResult.isSuccess()) {
      console.log(modelsResult.value);
    }
  }
}
