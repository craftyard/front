import {
  AfterContentInit, Component, ElementRef, Inject, NgZone, ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

import { TelegramAuthDTO } from 'cy-domain/src/subject/domain-data/user/user-authentification/a-params';
import { UserAuthentificationActionDod, UserAuthentificationServiceParams } from 'cy-domain/src/subject/domain-data/user/user-authentification/s-params';
import { Logger } from 'rilata/src/common/logger/logger';
import { GetUserActionDod, GetingUserServiceParams } from 'cy-domain/src/subject/domain-data/user/get-user/s-params';
import { AppState } from '../../../shared/states/app-state';
import { AlertComponent } from '../../../shared/ui-kit/alert/component';
import { AngularBackendApi } from '../../../shared/angularBackendApi';

@Component({
  selector: 'login-btn',
  template: `
    <div #script>
      <ng-content></ng-content>
    </div>
  `,
})
export class LoginButtonComponent implements AfterContentInit {
  @ViewChild('script', { static: true }) script!: ElementRef;

  constructor(
    @Inject('userAuthApi') private userAuthApi: AngularBackendApi,
    @Inject('mockSubjectApi') private mockSubjectApi:AngularBackendApi,
    private ngZone: NgZone,
    private appstate: AppState,
    @Inject('logger') private logger: Logger,
    private router: Router,
    private alert:AlertComponent,
  ) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).onTelegramAuth = (user: TelegramAuthDTO) => {
      const actionDod: UserAuthentificationActionDod = {
        meta: {
          name: 'userAuthentification',
          actionId: crypto.randomUUID(),
          domainType: 'action',
        },
        attrs: user,
      };
      this.ngZone.run(async () => {
        const result = await this.userAuthApi.request<UserAuthentificationServiceParams>(actionDod);
        if (result.isFailure()) {
          const err = result.value;
          if (err.name === 'TelegramUserDoesNotExistError') {
            this.alert.openSnackBar(err.locale.text);
          }
          if (err.name === 'TelegramHashNotValidError') {
            this.alert.openSnackBar(err.locale.text);
          }
          if (err.name === 'TelegramAuthDateNotValidError') {
            this.alert.openSnackBar(err.locale.text);
          }
          if (err.name === 'ManyAccountNotSupportedError') {
            this.alert.openSnackBar(err.locale.text);
          }
        }
        if (result.isSuccess()) {
          this.appstate.setAccessToken(result.value.accessToken);
          const getUserActionDod : GetUserActionDod = {
            meta: {
              name: 'getUser',
              actionId: crypto.randomUUID(),
              domainType: 'action',
            },
            attrs: {
              userId: { onMe: true },
            },
          };
          const userResult = await this.mockSubjectApi
            .request<GetingUserServiceParams>(getUserActionDod);
          if (userResult.isFailure()) {
            const err = userResult.value;
            if (err.name === 'UserDoesNotExistError') {
              this.alert.openSnackBar(err.locale.text);
            }
          }
          if (userResult.isSuccess()) {
            this.appstate.setCurrentUser(userResult.value);
          }
        }
      });
    };
  }

  convertToScript() {
    const element = this.script.nativeElement;
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?5';
    script.setAttribute('data-telegram-login', 'rennat_bot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.setAttribute('data-request-access', 'write');
    element.parentElement.replaceChild(script, element);
  }

  ngAfterContentInit(): void {
    this.convertToScript();
  }
}
