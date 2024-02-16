import { Injectable } from '@angular/core';
import { ServiceResult } from 'rilata/src/app/service/types';
import { success } from 'rilata/src/common/result/success';
import { CurrentUser, GetingCurrentUserServiceParams } from 'cy-domain/src/subject/domain-data/user/get-current-user/s-params';

@Injectable({
  providedIn: 'root',
})
export class SubjectBackendApiMock {
  async request<SERVICE_PARAMS extends GetingCurrentUserServiceParams >(
    actionDod: SERVICE_PARAMS['actionDod'],
  ): Promise<ServiceResult<SERVICE_PARAMS>> {
    if (actionDod.meta.name === 'GetCurrentUser') {
      const result:CurrentUser = {
        userId: 'd462f0c6-25c4-45a3-bcf5-7d25d2a9a8df',
        telegramId: 694528239,
        type: 'employee',
        userProfile: {
          firstName: 'Renat',
          lastName: 'Sagyngaliev',
        },
        workshopName: 'Gis expert',
        workshopId: 'a1b2c3d4-e5f6-g7h8-i9j10-k11l12m13n14',
      };
      return success(result);
    }
    throw new Error(
      "ответ для ActionDod с именем 'GetCurrentUserActionDod' не реализован",
    );
  }
}
