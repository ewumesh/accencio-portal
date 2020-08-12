import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import PerfectScrollbar from 'perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';
import { ARequest } from 'request/request';
import { Workbook } from 'app/core/types/Workbook';
import { ASession } from 'request/session';
import { AuthService } from 'app/service/auth/auth.service';
import { BaseComponent } from 'app/core/BaseControler';
import { Router } from '@angular/router';
import { Library } from 'app/libraries/list/Library';

function getNewTime(d) {
   let h = (d.getHours() < 10 ? '0' : '') + d.getHours(),
      m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes(),
      s = (d.getSeconds() < 10 ? '0' : '') + d.getSeconds(),
      time = h + ":" + m + ":" + s;
   return time;
}

@Component({
   selector: 'ms-home-2',
   templateUrl: './home-component.html',
   styleUrls: ['./home-component.scss'],
   encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

   // line chart label
   public label: string[] = ['15', '30', '45', '60', '75', '90', '105'];

   //line chart data
   public data: any[] = [
      { data: [40, 80, 20, 95, 30, 80, 40], label: "Daily Sales" }
   ];

   //line chart color
   public color: Array<any> = [
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
   public lineChartOptions: any = {
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

   public workbooks: Workbook[];
   public dashboards: Library[];

   constructor(private pageTitleService: PageTitleService,
      private request: ARequest,
      private session: ASession,
      private router: Router,
      private authService: AuthService,
      public translate: TranslateService) {
   }

   ngOnInit() {
      this.translate.get('Home').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });

      //const rperm2 = this.request.get('/org/byname/' + this.session.company);
      //rperm2.subscribe(orgs => {
      //   debugger;
      //});
      const rperm = this.request.get('/org/all/');
      rperm.subscribe(orgs => {
         const org = (orgs as any[]).find(e => e.name === this.session.company);
         this.session.oid = org.id;
         this.request.get('/library/all/' + this.session.company).subscribe(
            res => {
               this.dashboards = res;
            }
         );

         this.request.get('/permission/byidname/' + this.session.oid + '/' + this.session.username).subscribe(
            res => {
               this.workbooks = res.w
            });
      })

   }

   dash1(id) {
      this.router.navigate(['/dashboard/' + id]);
   }
   dashlib1(id) {
      this.router.navigate(['/dashboard/lib/' + id]);
   }
}
