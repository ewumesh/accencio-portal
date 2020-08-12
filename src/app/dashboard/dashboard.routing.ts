import { Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { Dash1Component } from './dash-1/dash.component';
import { Dash2Component } from './dash-2/dash.component';
import { Dashboardv2Component } from './dashboard-v2/dashboard2.component';
import { Dashboardv1Component } from './dashboard-v1/dashboard.component';

export const DashboardRoutes : Routes = [
   {
      path: '',
      children: [
      {
         path: 'my',
         component: DashComponent
       }]
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
