import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgxChartsModule} from '@swimlane/ngx-charts';
import { TranslateModule } from '@ngx-translate/core';

import { DirectivesModule } from '../core/directive/directives.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HomeRoutes } from './home.routing';
import { HomeComponent } from './dash/home.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		TranslateModule,
		AngularEditorModule,
		NgxChartsModule,
		DirectivesModule,
		PerfectScrollbarModule,
    	RouterModule.forChild(HomeRoutes)
	],
	declarations: [
		HomeComponent
	]
})

export class HomeModule { }
