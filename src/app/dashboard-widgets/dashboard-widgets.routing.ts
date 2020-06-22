import { Routes } from '@angular/router';
import { DashWidgetsComponent } from './dash-widgets/dash-widgets.component';
import { DashWidgets2Component } from './dash-widgets2/dash-widgets2.component';
import { DashComponent } from './dash/dash.component';

export const DashboardWidgetsRoutes : Routes = [
   {
      path: '',
      component: DashComponent
   },
   {
      path: '2',
      component: DashWidgets2Component
   }
   ,
   {
      path: '3',
      component: DashWidgetsComponent
   }
];
