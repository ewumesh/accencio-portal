import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { LibrariesRoutes } from './favorites.routing';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AddComponent } from './fav-component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NgxDatatableModule,
		AngularEditorModule,
		RouterModule.forChild(LibrariesRoutes),
		TranslateModule,
		NgMultiSelectDropDownModule.forRoot()
	],
	declarations: [
		AddComponent,
	]
})

export class FavoritesModule { }
