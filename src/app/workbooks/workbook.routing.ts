import { Routes } from '@angular/router';
import { ListComponent } from './list/list-component';
import { AddComponent } from './add/add-component';

export const WorkbookRoutes: Routes = [{
  path: '',
  redirectTo: 'list',
  pathMatch: 'full',
}, {
  path: '',
  children: [{
    path: 'list',
    component: ListComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'edit/:id',
    component: AddComponent
  }]
}];
