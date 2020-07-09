import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { LibrariesRoutes } from './libraries.routing';
import { LibrariesManageListComponent } from './libraries-manage-list/libraries-manage-list.component';
import { UserManageGridComponent } from './user-manage-grid/user-manage-grid.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { AddComponent } from './add/add-component';
import {AngularEditorModule} from "@kolkov/angular-editor";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

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
		LibrariesManageListComponent,
		UserManageGridComponent,
	]
})

export class LibrariesModule {}
