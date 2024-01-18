import { Injectable } from '@angular/core';
import { AngularBackendApi } from 'app/shared/angularBackendApi';
import { WORKSHOP_MODULE_URL } from 'cy-domain/src/workshop/workshop-config';

@Injectable({
  providedIn: 'root',
})
export class WorkshopApi extends AngularBackendApi {
  protected moduleUrl: string = WORKSHOP_MODULE_URL;
}
