import { Component, Optional, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './service/auth/auth.service';

@Component({
	selector: 'chankya-app',
	template:'<router-outlet></router-outlet>',
	encapsulation: ViewEncapsulation.None
})

export class ChankyaAppComponent {
   constructor(translate: TranslateService, authService: AuthService) {
		translate.addLangs(['en', 'fr', 'he', 'ru' , 'ar' , 'zh' ,'de' , 'es', 'ja', 'ko' , 'it' ,'hu']);
		translate.setDefaultLang('en');

		const browserLang: string = translate.getBrowserLang();
		translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

		authService.getUserInfo();
	}
}
