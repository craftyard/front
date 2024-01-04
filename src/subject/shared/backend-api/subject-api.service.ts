import { Injectable } from '@angular/core';
import { AngularBackendApi } from 'app/shared/angularBackendApi';

@Injectable({
  providedIn: 'root',
})
export class SubjectApi extends AngularBackendApi {
  protected override moduleUrl: string = '/subject';
}
