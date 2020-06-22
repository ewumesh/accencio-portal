import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { UserManageRoutes } from './user-manage.routing';
import { UserManageListComponent } from './user-manage-list/user-manage-list.component';
import { UserManageGridComponent } from './user-manage-grid/user-manage-grid.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(UserManageRoutes),
		TranslateModule
	],
	declarations: [ 
		UserManageListComponent,
		UserManageGridComponent,
	]
})

export class UserManageModule {}
