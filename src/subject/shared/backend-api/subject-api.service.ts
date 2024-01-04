import { Inject, Injectable } from '@angular/core';
import { AngularBackendApi } from 'app/shared/angularBackendApi';
import { Logger } from 'rilata/src/common/logger/logger';

@Injectable({
  providedIn: 'root',
})
export class SubjectApi extends AngularBackendApi {
  protected override moduleUrl: string = '/subject';

  constructor(@Inject('logger') logger: Logger) {
    const jwtToken: string | null = localStorage.getItem('user');
    super(logger, jwtToken || '');
  }
}
