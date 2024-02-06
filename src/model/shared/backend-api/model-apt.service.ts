import { Injectable } from '@angular/core';
import { MODEL_MODULE_URL } from 'cy-domain/src/model/model-config';
import { AngularBackendApi } from '../../../app/shared/angularBackendApi';

@Injectable({
  providedIn: 'root',
})
export class WorkshopApi extends AngularBackendApi {
  protected moduleUrl: string = MODEL_MODULE_URL;
}
