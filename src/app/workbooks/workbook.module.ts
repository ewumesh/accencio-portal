import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { WorkbookRoutes } from './workbook.routing';
import { ListComponent } from './list/list-component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddComponent } from './add/add-component';


@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NgxDatatableModule,
      RouterModule.forChild(WorkbookRoutes),
      TranslateModule
   ],
   declarations: [
      AddComponent,
      ListComponent,
   ]
})

export class WorkbookModule {}
