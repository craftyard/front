import { Injectable } from '@angular/core';
import { moduleUrls } from 'cy-domain/src/server-config';
import { AngularBackendApi } from '../../../app/shared/angularBackendApi';

@Injectable({
  providedIn: 'root',
})
export class WorkshopApi extends AngularBackendApi {
  protected moduleUrl: string = `http://localhost:3000${moduleUrls.subjectWorkshopRead}`;
}
