import { BackendApi } from 'rilata/src/app/backend-api/backend-api';
import { AppBaseErrors } from 'rilata/src/app/service/error-types';
import { GeneralQueryServiceParams, GeneralCommandServiceParams, ServiceResult } from 'rilata/src/app/service/types';
import { Logger } from 'rilata/src/common/logger/logger';
import { Router } from '@angular/router';

export class AngularBackendApi extends BackendApi {
  protected override moduleUrl!: string;

  constructor(logger: Logger, jwtToken: string, private router: Router) {
    super(logger, jwtToken);
  }

  override async request<SERVICE_PARAMS extends GeneralQueryServiceParams
  | GeneralCommandServiceParams>(
    actionDod: SERVICE_PARAMS['actionDod'],
  ): Promise<ServiceResult<SERVICE_PARAMS>> {
    const result = await super.request(actionDod);
    if (result.isFailure()) {
      const errName = (result.value as AppBaseErrors).meta.name;
      if (errName === 'Not found') {
        this.router.navigate(['/error/{status_code[err.name]']);
      }
    }
    return result;
  }
}
