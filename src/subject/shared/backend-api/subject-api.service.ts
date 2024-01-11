import { Injectable } from '@angular/core';
import { AngularBackendApi } from 'app/shared/angularBackendApi';
import { subjectApi } from 'subject/shared/backend-api/api';

@Injectable({
  providedIn: 'root',
})
export class SubjectApi extends AngularBackendApi {
  protected moduleUrl: string = subjectApi;
}
