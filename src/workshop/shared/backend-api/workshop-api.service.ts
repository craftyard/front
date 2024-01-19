import { Injectable } from '@angular/core';
import { WORKSHOP_MODULE_URL } from 'cy-domain/src/workshop/workshop-config';
import { AngularBackendApi } from '../../../app/shared/angularBackendApi';

@Injectable({
  providedIn: 'root',
})
export class WorkshopApi extends AngularBackendApi {
  protected moduleUrl: string = WORKSHOP_MODULE_URL;
}
