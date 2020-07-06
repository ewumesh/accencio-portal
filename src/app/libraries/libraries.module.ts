import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { LibrariesRoutes } from './libraries.routing';
import { LibrariesManageListComponent } from './libraries-manage-list/libraries-manage-list.component';
import { UserManageGridComponent } from './user-manage-grid/user-manage-grid.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(LibrariesRoutes),
		TranslateModule
	],
	declarations: [
		LibrariesManageListComponent,
		UserManageGridComponent,
	]
})

export class LibrariesModule {}
