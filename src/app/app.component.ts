import { Component, Optional, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './service/auth/auth.service';

@Component({
	selector: 'accencio-app',
	template:'<router-outlet></router-outlet>',
	encapsulation: ViewEncapsulation.None
})

export class AccencioAppComponent {

	loadAPI: Promise<any>;
   constructor(translate: TranslateService, authService: AuthService) {
		translate.addLangs(['en', 'fr', 'he', 'ru' , 'ar' , 'zh' ,'de' , 'es', 'ja', 'ko' , 'it' ,'hu']);
		translate.setDefaultLang('en');

		const browserLang: string = translate.getBrowserLang();
		translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

		authService.getUserInfo2();

		this.loadAPI = new Promise((resolve) => {
            console.log('resolving promise...');
            this.loadScript();
        });
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
