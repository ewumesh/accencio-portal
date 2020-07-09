import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { OrganizationRoutes } from './organization.routing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AddOrgComponent } from './add/add-component';
import { ListOrgComponent } from './list/list-component';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NgxDatatableModule,
      AngularEditorModule,
      RouterModule.forChild(OrganizationRoutes),
      TranslateModule
   ],
   declarations: [
      AddOrgComponent,
      ListOrgComponent,
   ]
})

export class OrganizationModule {}
