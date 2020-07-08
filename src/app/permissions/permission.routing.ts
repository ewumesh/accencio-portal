import { Routes } from '@angular/router';
import { PermListComponent } from './list/list-component';

export const PermissionRoutes: Routes = [
{
  path: '',
  redirectTo: 'list',
  pathMatch: 'full',
},
{
  path: '',
  children: [{
    path: 'list',
    component: PermListComponent
  }]
}
];
