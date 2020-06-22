import { Routes } from '@angular/router';

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

export const TablesRoutes: Routes = [{
  path: '',
  redirectTo: 'basic-table',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'basic',
    component: BasicTableComponent
  }, {
    path: 'fullscreen',
    component: FullscreenTableComponent
  }, {
    path: 'editing',
    component: EditingTableComponent
  }, {
    path: 'filter',
    component: FilterTableComponent
  }, {
    path: 'paging',
    component: PagingTableComponent
  }, {
    path: 'sorting',
    component: SortingTableComponent
  }, {
    path: 'pinning',
    component: PinningTableComponent
  }, {
    path: 'selection',
    component: SelectionTableComponent
  }, {
    path: 'responsive',
    component: ResponsiveTableComponent
  }, {
    path: 'foo',
    component: FooTableComponent
  }]
}];
