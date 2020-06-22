import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-ngx-charts',
   templateUrl:'./ngx-chart-component.html',
   styleUrls: ['./ngx-chart-component.scss'],
   encapsulation: ViewEncapsulation.None  
})

export class NgxChartComponent implements OnInit {

   view: any;

   constructor( private pageTitleService: PageTitleService,
                public translate: TranslateService) {

      this.view = [window.innerWidth/3, 300];
   }

   ngOnInit() {
      this.translate.get('Ngx Charts').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }

   single: any[] =[
      {
         "name": "Germany",
         "value": 8940000
      },
      {
         "name": "USA",
         "value": 5000000
      },
      {
         "name": "France",
         "value": 7200000
      }
   ];

   multi : any[] =[
      {
         "name": "Germany",
         "series": [
            {
               "name": "2010",
               "value": 7300000
            },
            {
               "name": "2011",
               "value": 8940000
            }
         ]
      },

      {
         "name": "USA",
         "series": [
            {
               "name": "2010",
               "value": 7870000
            },
            {
               "name": "2011",
               "value": 8270000
            }
         ]
      },

      {
         "name": "France",
         "series": [
            {
               "name": "2010",
               "value": 5000002
            },
            {
               "name": "2011",
               "value": 5800000
            }
         ]
      }
   ];

   // options
   showXAxis = true;
   showYAxis = true;
   gradient = false;
   showLegend = true;
   showXAxisLabel = true;
   xAxisLabel = 'Country';
   showYAxisLabel = true;
   yAxisLabel = 'Population';

   // pie
   showLabels = true;
   explodeSlices = false;
   doughnut = false;

   // line, area
   autoScale = true;

   colorScheme = {
      domain: ['#1862c6', '#DEE4E8', '#3a84eb', '#414658']
   };

    
   onSelect(event) {
      console.log(event);
   }

   //onResize method is used to resize the chart.
   onResize(event) { 
      this.view = [event.target.innerWidth, 300];
   }

}



