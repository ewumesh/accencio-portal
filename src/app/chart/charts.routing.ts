import { Routes } from '@angular/router';

import { ChartComponent}  from './ng2-charts/chart.component';
import { NgxChartComponent}  from './ngx-charts/ngx-chart.component';
import { EasyPieChartComponent}  from './easy-pie-chart/easy-pie-chart.component';
import { GoogleChartComponent}  from './google-charts/google-chart.component';

export const ChartsRoutes: Routes = [{
  path: '',
  redirectTo: 'ng2-charts',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'ng2-charts',
    component: ChartComponent
  }, {
    path: 'ngx-charts',
    component: NgxChartComponent
  }, {
    path: 'easy-pie-chart',
    component: EasyPieChartComponent
  }, {
    path: 'google-chart',
    component: GoogleChartComponent
  }]
}];
