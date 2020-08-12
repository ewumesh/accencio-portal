import { Routes } from '@angular/router';
import { PermListComponent } from './list/list-component';
import { PermOrgListComponent } from './olist/list-component';
import { PermUserListComponent } from './ulist/component';

export const PermissionRoutes: Routes = [
{
  path: '',
  redirectTo: 'list',
  pathMatch: 'full',
},
{
  path: '',
  children: [{
    path: 'oldlist',
    component: PermListComponent
  }]
},
{
  path: '',
  children: [{
    path: 'list',
    component: PermOrgListComponent
  }]
},
{
  path: '',
  children: [{
    path: 'ulist/:id/:name',
    component: PermUserListComponent
  }]
},
{
  path: '',
  children: [{
    path: 'up',
    component: PermUserListComponent
  }]
}
];
