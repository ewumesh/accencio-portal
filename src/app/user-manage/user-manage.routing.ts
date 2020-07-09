import { Routes } from '@angular/router';

import { UserManageListComponent } from './user-manage-list/user-manage-list.component';
import { UserManageGridComponent } from './user-manage-grid/user-manage-grid.component';
import { AddUserComponent } from './add/add-component';

export const UserManageRoutes: Routes = [
   {
      path: '',
      redirectTo: 'management-list',
      pathMatch: 'full',
   },
   {
      path: '',
      children: [
         {
            path: 'management-list',
            component: UserManageListComponent
         },
         {
            path: 'add',
            component: AddUserComponent
         },
         {
            path: 'edit/:id',
            component: AddUserComponent
          },
         {
            path: 'management-grid-list',
            component: UserManageGridComponent
         }
      ]
   }
];
