import { BackendApi } from 'rilata/src/app/backend-api/backend-api';
import { ServiceBaseErrors } from 'rilata/src/app/service/error-types';
import { GeneralQueryServiceParams, GeneralCommandServiceParams, ServiceResult } from 'rilata/src/app/service/types';
import { Logger } from 'rilata/src/common/logger/logger';
import { Router } from '@angular/router';
import { STATUS_CODES } from 'rilata/src/app/controller/constants';
import { Inject, Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class AngularBackendApi extends BackendApi {
  router: Router = inject(Router);

  // eslint-disable-next-line no-useless-constructor
  constructor(@Inject('logger') logger: Logger) {
    super(logger);
  }

  override async request<SERVICE_PARAMS extends GeneralQueryServiceParams
  | GeneralCommandServiceParams>(
    actionDod: SERVICE_PARAMS['actionDod'],
  ): Promise<ServiceResult<SERVICE_PARAMS>> {
    const jwtToken = localStorage.getItem('user') ?? '';
    const result = await super.request(actionDod, jwtToken);
    if (result.isFailure()) {
      const errName = (result.value as ServiceBaseErrors).name;
      const redirectErrorNames: ServiceBaseErrors['name'][] = [
        'Internal error',
        'Permission denied',
        'Not found',
      ];
      if (redirectErrorNames.includes(errName)) {
        this.router.navigate([`/error-page/${STATUS_CODES[errName]}`]);
      }
    }

    return result;
  }
}
