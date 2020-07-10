import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar'
import { NgxChartsModule} from '@swimlane/ngx-charts';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { DirectivesModule } from '../core/directive/directives.module';
import { DashComponent } from './dash/dash.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DashboardRoutes } from './dashboard.routing';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true
};

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		TranslateModule,
		AngularEditorModule,
		NgxChartsModule,
		DirectivesModule,
		PerfectScrollbarModule,
    	RouterModule.forChild(DashboardRoutes)
	],
	declarations: [
		DashComponent
	],
	providers: [
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		}
 	]
})

export class DashboardModule { }
