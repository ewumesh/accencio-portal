import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { TourNgBootstrapModule } from 'ngx-tour-ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { SidebarModule } from 'ng-sidebar';
import { ToastrModule } from 'ngx-toastr';
import 'hammerjs'; 

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './service/auth/auth.service';

import { ChankyaAppComponent} from './app.component';
import { RoutingModule } from "./app-routing.module";
import { MainComponent }   from './main/main.component';
import { AuthComponent }   from './auth/auth.component';
import { HorizontalLayoutComponent } from './horizontal-layout/horizontal-layout.component';
import { MenuToggleModule } from './core/menu/menu-toggle.module';
import { MenuItems } from './core/menu/menu-items/menu-items';
import { PageTitleService } from './core/page-title/page-title.service';
import { SessionDemoModule } from './session/session.module';
import { WidgetsComponentModule } from './widgets-component/widgets-component.module';
import { ASession } from 'request/session';

/********** Custom option for ngx-translate ******/
export function createTranslateLoader(http: HttpClient) {
   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
} 

export const firebase = {
	apiKey: "AIzaSyAYQ701NLzFMFFtx-A71OzNfORfJhR1RvI",
	authDomain: "chankya-e0e7a.firebaseapp.com",
	databaseURL: "https://chankya-e0e7a.firebaseio.com",
	projectId: "chankya-e0e7a",
	storageBucket: "chankya-e0e7a.appspot.com",
	messagingSenderId: "531424365001"
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true
};

const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
   suppressScrollX: true
};

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		CdkTableModule,
		SidebarModule.forRoot(),
		RoutingModule,
		RouterModule,
		SessionDemoModule,
		TourNgBootstrapModule.forRoot(),
		NgbModalModule.forRoot(),
		AgmCoreModule.forRoot({apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'}),
		PerfectScrollbarModule,
		MenuToggleModule,
		HttpClientModule,
		TranslateModule.forRoot({
		loader: {
			provide: TranslateLoader,
			useFactory: createTranslateLoader,
			deps: [HttpClient]
		}
		}),
		ToastrModule.forRoot({
			timeOut: 2000,
			preventDuplicates: true
		}),		
		WidgetsComponentModule,
		AngularFireModule.initializeApp(firebase),
		AngularFireAuthModule
    ],
	declarations: [
		ChankyaAppComponent, 
		MainComponent,
		AuthComponent,
		HorizontalLayoutComponent
	],
	bootstrap: [ChankyaAppComponent],
	providers:[
		ASession,
		MenuItems,
		PageTitleService,
		AuthService,
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		}
	]
})
export class ChankyaAppModule { }
