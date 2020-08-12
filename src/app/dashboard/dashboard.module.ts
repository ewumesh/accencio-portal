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
import { Dash1Component } from './dash-1/dash.component';
import { Dash2Component } from './dash-2/dash.component';
import { Dashboardv1Component } from './dashboard-v1/dashboard.component';
import { Dashboardv2Component } from './dashboard-v2/dashboard2.component';

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
		DashComponent,
		Dash1Component,
		Dash2Component,
		Dashboardv1Component,
		Dashboardv2Component
	],
	providers: [
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		}
 	]
})

export class DashboardModule { }
