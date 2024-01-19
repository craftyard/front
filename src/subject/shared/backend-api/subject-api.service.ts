import { Injectable } from '@angular/core';
import { SUBJECT_MODULE_URL } from 'cy-domain/src/subject/subject-config';
import { AngularBackendApi } from '../../../app/shared/angularBackendApi';

@Injectable({
  providedIn: 'root',
})
export class SubjectApi extends AngularBackendApi {
  protected moduleUrl: string = SUBJECT_MODULE_URL;
}
