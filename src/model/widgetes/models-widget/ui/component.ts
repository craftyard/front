import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetWorkshopModelsActionDod, GetingWorkshopModelsServiceParams } from 'cy-domain/src/model/domain-data/model/get-models/s-params';
import { ModelAttrs } from 'cy-domain/src/model/domain-data/params';
import { DOCUMENT } from '@angular/common';
import { AddModelComponent } from '../../../feature/add-model/ui/component';
import { AppState } from '../../../../app/shared/states/app-state';
import { AlertComponent } from '../../../../app/shared/ui-kit/alert/component';
import { AngularBackendApi } from '../../../../app/shared/angularBackendApi';

@Component({
  selector: 'models-widget',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class ModelsWidgetComponent implements OnInit {
  appMode: 'mobile' | 'browser' = 'browser';

  workshopId! : string;

  workshopModels!: ModelAttrs[];

  constructor(
    private appState: AppState,
    public dialog: MatDialog,
    @Inject('modelApi') private modelApi:AngularBackendApi,
    private alert: AlertComponent,
    @Inject(DOCUMENT) private document: Document,
  ) { }

  openDialog() {
    const dialogRef = this.dialog.open(AddModelComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Form values:', result);
    });
  }

  async ngOnInit(): Promise<void> {
    this.appState.currentUser$.subscribe((workId) => {
      this.workshopId = workId!.workshopId;
    });
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
        workshopId: this.workshopId,
      },
    };
    const modelsResult = await this.modelApi.request<
    GetingWorkshopModelsServiceParams>(actionDod);
    if (modelsResult.isSuccess()) {
      this.workshopModels = modelsResult.value;
    }
    if (modelsResult.isFailure()) {
      const err = modelsResult.value;
      this.alert.openSnackBar(err.locale.text);
    }
    const script = this.document.createElement('script');
    script.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
    this.document.body.appendChild(script);
  }
}
