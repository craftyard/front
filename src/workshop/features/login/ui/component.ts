import {
  AfterContentInit, Component, ElementRef, NgZone, ViewChild,
} from '@angular/core';
import { AppState } from 'app/model/app-state';
import { User } from '../model/type';

@Component({
  selector: 'app-telegram-login-widget',
  template: `
    <div #script>
      <ng-content></ng-content>
    </div>
  `,
})
export class TelegramLoginWidgetComponent implements AfterContentInit {
  @ViewChild('script', { static: true }) script!: ElementRef;

  constructor(private ngZone: NgZone, private appstate: AppState) {
    (window as any).onTelegramAuth = (user: User) => {
      this.ngZone.run(() => {
        this.appstate.setUser(user);
        console.log('hello');
      });
    };
  }

  convertToScript() {
    const element = this.script.nativeElement;
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?5';
    script.setAttribute('data-telegram-login', 'rennat_bot');
    script.setAttribute('data-size', 'large');
    // Callback function in global scope
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.setAttribute('data-request-access', 'write');
    element.parentElement.replaceChild(script, element);
  }

  ngAfterContentInit(): void {
    this.convertToScript();
  }
}
