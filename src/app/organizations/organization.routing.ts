import { Routes } from '@angular/router';
import { ListOrgComponent } from './list/list-component';
import { AddOrgComponent } from './add/add-component';

export const OrganizationRoutes: Routes = [{
  path: '',
  redirectTo: 'list',
  pathMatch: 'full',
}, {
  path: '',
  children: [{
    path: 'list',
    component: ListOrgComponent
  },
  {
    path: 'add',
    component: AddOrgComponent
  },
  {
    path: 'edit/:id',
    component: AddOrgComponent
  }]
}];
