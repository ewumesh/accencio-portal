import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { ChartsModule } from 'ng2-charts';
import { EasyPieChartModule } from 'ng2modules-easypiechart';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgxChartsModule} from '@swimlane/ngx-charts';

import { ChartComponent}  from './ng2-charts/chart.component';
import { NgxChartComponent}  from './ngx-charts/ngx-chart.component';
import { EasyPieChartComponent}  from './easy-pie-chart/easy-pie-chart.component';
import { GoogleChartComponent}  from './google-charts/google-chart.component';
import { ChartsRoutes } from './charts.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2GoogleChartsModule,
    NgxChartsModule,
    ChartsModule,
    EasyPieChartModule,
    TranslateModule,
    RouterModule.forChild(ChartsRoutes)
  ],
  declarations: [ 
    ChartComponent,
    NgxChartComponent,
    EasyPieChartComponent,
    GoogleChartComponent,
  ]
})

export class ChartDemoModule {}
