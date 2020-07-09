import { Routes } from '@angular/router';

import { LibrariesManageListComponent } from './libraries-manage-list/libraries-manage-list.component';
import { UserManageGridComponent } from './user-manage-grid/user-manage-grid.component';
import { AddComponent } from "./add/add-component";

export const LibrariesRoutes: Routes = [
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
            component: LibrariesManageListComponent
         },
         {
            path: 'management-grid-list',
            component: UserManageGridComponent
         },
         {
           path: 'add',
           component: AddComponent
         },
        {
          path: 'edit/:id',
          component: AddComponent
        }
      ]
   }
];
