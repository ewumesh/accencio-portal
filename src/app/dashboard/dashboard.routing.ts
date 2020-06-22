import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard-v1/dashboard.component';
import { DashboardOneComponent } from './dashboard-v2/dashboard2.component';


export const DashboardRoutes: Routes = [{
  path: '',
  redirectTo: 'dashboard-v1',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'dashboard-v1',
    component: DashboardComponent
  }, {
    path: 'dashboard-v2',
    component: DashboardOneComponent
  }]
}];
