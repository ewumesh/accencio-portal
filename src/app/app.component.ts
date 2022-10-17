import { Component, Optional, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './service/auth/auth.service';

import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';

@Component({
  selector: 'accencio-app',
  template: '<router-outlet></router-outlet>',
  encapsulation: ViewEncapsulation.None
})

export class AccencioAppComponent {

  loadAPI: Promise<any>;

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  title = 'sajha-portal';
  userDetails;
  userName;
  userType;

  constructor(translate: TranslateService, authService: AuthService, private idle: Idle, private keepalive: Keepalive,) {
    translate.addLangs(['en', 'fr', 'he', 'ru', 'ar', 'zh', 'de', 'es', 'ja', 'ko', 'it', 'hu']);
    translate.setDefaultLang('en');

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

    authService.getUserInfo2();

    this.loadAPI = new Promise((resolve) => {
      console.log('resolving promise...');
      this.loadScript();
    });

    // Idle Time out
    // sets an idle timeout of 10 mins
    idle.setIdle(600);
    // sets a timeout period of 5 seconds. after 10 mins of inactivity, the user will be considered timed out.
    idle.setTimeout(5);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => {
      this.idleState = 'No longer idle.'
      console.log(this.idleState);
      this.reset();
    });

    idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState = 'You will time out in ' + countdown + ' seconds!'

      if (countdown === 1) {
        authService.logOut();
        window.location.reload();
      }
      console.log(this.idleState);
    });

    // sets the ping interval to 15 seconds
    keepalive.interval(15);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());
  }


  makeString(): string {
    let outString: string = '';
    let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 32; i++) {

      outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));

    }

    return outString;
  }

  public loadScript() {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = 'https://static.zdassets.com/ekr/snippet.js?key=12d7d8f1-4f67-4081-87a5-ee701af3f0b1&rnd=' + this.makeString();
    node.type = 'text/javascript';
    node.id = 'ze-snippet';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }
}
