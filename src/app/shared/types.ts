import { BadRequestError } from 'rilata/src/app/service/error-types';
import { GeneralCommandServiceParams, GeneralQueryServiceParams } from 'rilata/src/app/service/types';
import { Result } from 'rilata/src/common/result/types';
import { Locale } from 'rilata/src/domain/locale';

export type ComponentResult<
  P extends GeneralQueryServiceParams | GeneralCommandServiceParams
> = Result<
  P['errors'] | BadRequestError<Locale>,
  P['successOut']
>
