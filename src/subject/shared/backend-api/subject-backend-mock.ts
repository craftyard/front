import { Injectable } from '@angular/core';
import { ServiceResult } from 'rilata/src/app/service/types';
import { UserAttrs } from 'cy-domain/src/subject/domain-data/user/params';
import { GetingUserServiceParams } from 'cy-domain/src/subject/domain-data/user/get-user/s-params';
import { success } from 'rilata/src/common/result/success';
import { GetingUsersServiceParams } from 'cy-domain/src/subject/domain-data/user/get-users/s-params';

@Injectable({
  providedIn: 'root', // Specify where the service should be provided. 'root' means it is available throughout the application.
})
export class SubjectBackendApiMock {
  async request<SERVICE_PARAMS extends GetingUserServiceParams | GetingUsersServiceParams>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    actionDod: SERVICE_PARAMS['actionDod'],
  ): Promise<ServiceResult<SERVICE_PARAMS>> {
    // let result;
    if (actionDod.meta.name === 'getUser') {
      const result: UserAttrs = {
        userId: '15545',
        telegramId: 0,
        type: 'employee',
        userProfile: {
          firstName: 'Renat',
          lastName: 'Sagyngaliev',
        },
      };
      return success(result);
    }
    const resultUsers: UserAttrs[] = [
      {
        userId: '15545',
        telegramId: 0,
        type: 'employee',
        userProfile: {
          firstName: 'Renat',
          lastName: 'Sagyngaliev',
        },
      },
      {
        userId: '15545',
        telegramId: 0,
        type: 'employee',
        userProfile: {
          firstName: 'Renat',
          lastName: 'Sagyngaliev',
        },
      },
    ];
    return success(resultUsers);
  }
}
