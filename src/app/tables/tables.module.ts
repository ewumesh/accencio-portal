import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { BasicTableComponent}  from './table-basic/table-basic.component';
import { FullscreenTableComponent}  from './table-fullscreen/table-fullscreen.component';
import { EditingTableComponent}  from './table-editing/table-editing.component';
import { FilterTableComponent}  from './table-filter/table-filter.component';
import { PagingTableComponent}  from './table-paging/table-paging.component';
import { SortingTableComponent}  from './table-sorting/table-sorting.component';
import { PinningTableComponent}  from './table-pinning/table-pinning.component';
import { SelectionTableComponent}  from './table-selection/table-selection.component';
import { ResponsiveTableComponent}  from './table-responsive/table-responsive.component';
import { FooTableComponent}  from './table-foo/table-foo.component';

import { TablesRoutes } from './tables.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    TranslateModule,
    RouterModule.forChild(TablesRoutes)
  ],
  declarations: [ 
    BasicTableComponent,
    FullscreenTableComponent,
    EditingTableComponent,
    FilterTableComponent,
    PagingTableComponent,
    SortingTableComponent,
    PinningTableComponent,
    SelectionTableComponent,
    ResponsiveTableComponent,
    FooTableComponent
  ]
})

export class TablesDemoModule {}
