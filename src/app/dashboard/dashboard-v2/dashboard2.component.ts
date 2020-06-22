import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { orders, products, customers, refunds, cost, pie } from '../dashboard.data';
import PerfectScrollbar from 'perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';

function getNewTime(d) {
   let h = (d.getHours()<10?'0':'') + d.getHours(),
      m = (d.getMinutes()<10?'0':'') + d.getMinutes(),
      s = (d.getSeconds()<10?'0':'') + d.getSeconds(),
      time = h + ":" + m + ":" + s;
      return time;
}

@Component({
  selector: 'ms-dashboard2',
  templateUrl:'./dashboard2-component.html',
  styleUrls: ['./dashboard2-component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DashboardOneComponent implements OnInit  {

   /*
      ----------Today's Sale Chart  ----------
   */
  
   // line chart label
   public label :string[] = ['15', '30', '45', '60', '75', '90', '105'];
   
   //line chart data
   public data : any[] = [
      {data: [40, 80, 20, 95, 30, 80, 40],label:"Daily Sales"}
   ];

   //line chart color
   public color: Array <any> = [
      {
         pointHoverBorderWidth: 4,
         pointBorderWidth: 3,     
         lineTension: 0.4,
         borderColor: '#1862c6',
         pointRadius: 6,
         borderWidth: 4,
         fill: false,
         fillOpacity: 0.3,
         pointHoverRadius: 7,
         pointBackgroundColor: '#1862c6'
      }
   ];

    //Today's sale line chart option
   public lineChartOptions :any = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
         yAxes: [{
            ticks: {
               beginAtZero: true,
               display: false
            },
            gridLines: {
               display: true,
               drawBorder: false,
               drawTicks: false
            },
         }],
         xAxes: [{
            ticks: {
               display: false,
               beginAtZero: true
            },
            gridLines: {
               display: false,
               Border: false
            }
         }]
      },
      legend: {
         display: false
      }
   }
   
   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {
   }

   ngOnInit() {
      this.translate.get('Dashboard 2').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }

}
