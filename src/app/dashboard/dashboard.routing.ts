import { Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { Dash1Component } from './dash-1/dash.component';
import { Dash2Component } from './dash-2/dash.component';

export const DashboardRoutes : Routes = [
   {
      path: '',
      component: DashComponent
   },
   {
      path: ':id',
      component: Dash1Component
    },
    {
      path: 'lib/:id',
      component: Dash2Component
    }
];
