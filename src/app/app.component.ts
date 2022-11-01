import { Component, Optional, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthServices } from './service/auth/auth.service';

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
	lastPing?: Date = null
	userData:any;
	isLoggedIn:boolean = false;

	constructor(translate: TranslateService, private authService: AuthServices, public idle: Idle, public keepalive: Keepalive) {
		this.getLocalStorageUser();
		if(this.isLoggedIn) {
		this.catchApplicationIdleTime();
		}

		translate.addLangs(['en', 'fr', 'he', 'ru', 'ar', 'zh', 'de', 'es', 'ja', 'ko', 'it', 'hu']);
		translate.setDefaultLang('en');

		const browserLang: string = translate.getBrowserLang();
		translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

		authService.getUserInfo2();

		this.loadAPI = new Promise((resolve) => {
			console.log('resolving promise...');
			this.loadScript();
		});
	}


	catchApplicationIdleTime() {

		// sets an idle timeout of 10 minutes.
		this.idle.setIdle(600);

		// sets a timeout period of 3 seconds. after 10 minutes of inactivity, the user will be considered timed out.
		this.idle.setTimeout(3);
		// this.idle.watch();
		// sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
		this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

		this.idle.onIdleStart.subscribe(() => {
      console.log('Logging out')
			alert('You were idle for 10 minutes. Logging out!')
			this.authService.logOut();
		  });
		  this.idle.watch();

		// sets the ping interval to 15 seconds
		this.keepalive.interval(15);

		this.keepalive.onPing.subscribe(() => this.lastPing = new Date());
		// this.reset();
	}

	   /*
    *  getLocalStorageUser function is used to get local user profile data.
    */
	   getLocalStorageUser() {
		this.userData = JSON.parse(localStorage.getItem("userProfile"));
		if (this.userData) {
		   this.isLoggedIn = true;
		   return true;
		} else {
		   this.isLoggedIn = false;
		   return false;
		}
	 }

	reset() {
		this.idle.watch();
		this.idleState = 'Started.';
		this.timedOut = false;
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
}
