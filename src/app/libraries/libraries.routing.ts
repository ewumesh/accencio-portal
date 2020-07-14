import { Routes } from '@angular/router';

import { LibrariesManageListComponent } from './libraries-manage-list/libraries-manage-list.component';
import { AddComponent } from "./add/add-component";

export const LibrariesRoutes: Routes = [
   {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full',
   },
   {
      path: '',
      children: [
         {
            path: 'list',
            component: LibrariesManageListComponent
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
