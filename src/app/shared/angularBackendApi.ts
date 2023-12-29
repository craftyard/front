import { BackendApi } from 'rilata/src/app/backend-api/backend-api';
import { AppBaseErrors } from 'rilata/src/app/service/error-types';
import { GeneralQueryServiceParams, GeneralCommandServiceParams, ServiceResult } from 'rilata/src/app/service/types';
import { Logger } from 'rilata/src/common/logger/logger';
import { Router } from '@angular/router';
import { STATUS_CODES } from 'rilata/src/app/controller/constants';
import { inject } from '@angular/core';

export abstract class AngularBackendApi extends BackendApi {
  router: Router = inject(Router);

  constructor(logger: Logger, jwtToken: string) {
    super(logger, jwtToken);
  }

  override async request<SERVICE_PARAMS extends GeneralQueryServiceParams
  | GeneralCommandServiceParams>(
    actionDod: SERVICE_PARAMS['actionDod'],
  ): Promise<ServiceResult<SERVICE_PARAMS>> {
    const result = await super.request(actionDod);
    if (result.isFailure()) {
      const errName = (result.value as AppBaseErrors).meta.name;
      const redirectErrorNames: AppBaseErrors['meta']['name'][] = [
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
