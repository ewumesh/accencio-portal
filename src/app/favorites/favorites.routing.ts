import { Routes } from '@angular/router';
import { AddComponent } from './fav-component';

export const LibrariesRoutes: Routes = [
   {
      path: '',
      redirectTo: 'add',
      pathMatch: 'full',
   },
   {
      path: '',
      children: [
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
