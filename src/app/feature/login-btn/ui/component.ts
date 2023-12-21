import {
  AfterContentInit, Component, ElementRef, Inject, NgZone, ViewChild,
} from '@angular/core';
import { AppState } from 'app/shared/states/app-state';
import { Authentificationable } from 'app/shared/user/authentificationable';
import { TelegramAuthDTO } from 'workshop-domain/src/subject/domain-data/user/user-authentification/a-params';

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
    @Inject('subjectApi') private subjectApi:Authentificationable,
    private ngZone: NgZone,
    private appstate: AppState,
  ) {
    (window as any).onTelegramAuth = (user: TelegramAuthDTO) => {
      this.ngZone.run(() => {
        this.appstate.setUser(user);
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
