import { Injectable } from '@angular/core';
import { AngularBackendApi } from 'app/shared/angularBackendApi';
import { workshopApi } from 'workshop/shared/backend-api/api';

@Injectable({
  providedIn: 'root',
})
export class WorkshopApi extends AngularBackendApi {
  protected moduleUrl: string = workshopApi;
}
