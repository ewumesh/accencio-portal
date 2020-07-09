import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { UserManageRoutes } from './user-manage.routing';
import { UserManageListComponent } from './user-manage-list/user-manage-list.component';
import { UserManageGridComponent } from './user-manage-grid/user-manage-grid.component';
import { AddUserComponent } from './add/add-component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild(UserManageRoutes),
		TranslateModule
	],
	declarations: [
		AddUserComponent ,
		UserManageListComponent,
		UserManageGridComponent,
	]
})

export class UserManageModule {}
