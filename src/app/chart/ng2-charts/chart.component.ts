import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ms-charts',
  templateUrl:'./chart-component.html',
  styleUrls: ['./chart-component.scss'],
  encapsulation: ViewEncapsulation.None  
})

export class ChartComponent implements OnInit {

   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

   ngOnInit() {
      this.translate.get('NG2 CHARTS').subscribe((res: string) => {
        this.pageTitleService.setTitle(res);
      });
   }
	
   public barChartOptions:any = {
      scaleShowVerticalLines: false,
      responsive: true
   };

   barChartColors: Array <any> = [{
      backgroundColor: '#1862c6',
      borderColor: '#1862c6',
      pointBackgroundColor: '#1862c6',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#1862c6'
   }, {
      backgroundColor: '#DEE4E8',
      borderColor: '#DEE4E8',
      pointBackgroundColor: '#DEE4E8',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#DEE4E8'
   }];

  	public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  	public barChartType:string = 'bar';
  	public barChartLegend:boolean = false;
  	public barChartData:any[] = [
    	{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    	{data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  	];

  	//Horizontal Bar
  	public barHorizontalChartOptions:any = {
    	scaleShowVerticalLines: false,
    	responsive: true
  	};
  	public barHorizontalChartType:string = 'horizontalBar';
  	public barHorizontalChartLegend:boolean = false;

  	//Stacked Bar
    public barStackChartOptions:any = {
	    scaleShowVerticalLines: false,
	    responsive: true,
	    scales: {
	      xAxes: [{
	        stacked: true,
	      }],
	      yAxes: [{
	        stacked: true
	      }]
	    }
	  };

	  // lineChart
  	public lineChartData:Array<any> = [
    	{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    	{data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    	{data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  	];

   lineChartColors: Array <any> = [{
      backgroundColor: 'rgba(0, 102, 235, 0.3)',
      borderColor: '#1862c6',
      pointBackgroundColor: 'rgba(0, 102, 235, 1)',
      pointBorderColor: '#1862c6',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0, 102, 235, 0.4)'
      }, {
      backgroundColor: 'rgba(235, 78, 54, 0.2)',
      borderColor: '#ff5723',
      pointBackgroundColor: 'rgba(235, 78, 54, 1)',
      pointBorderColor: '#ff5723',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(235, 78, 54, 0.8)'
      },{
      backgroundColor: 'rgba(67, 210, 158, 0.2)',
      borderColor: '#00caac',
      pointBackgroundColor: 'rgba(67, 210, 158, 1)',
      pointBorderColor: '#00caac',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(67, 210, 158, 0.8)'
   }];

  	public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  	public lineChartOptions:any = {
    	responsive: true
  	};

  	public lineChartLegend:boolean = false;
  	public lineChartType:string = 'line';

   //Stepped Line Chart
   lineChartSteppedData: Array <any> = [{
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A',
      borderWidth: 1,
      fill: false,
      steppedLine: true
      }, {
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Series B',
      borderWidth: 1,
      fill: false,
      steppedLine: true
      },{
      data: [18, 48, 77, 9, 100, 27, 40],
      label: 'Series C',
      borderWidth: 1,
      fill: false,
      steppedLine: true
   }];

   //Point Chart
   linePointChartData: Array <any> = [{
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Series A',
      borderWidth: 1,
      fill: false,
      pointRadius: 10,
      pointHoverRadius: 15,
      showLine: false
   }, {
      data: [28, 48, 40, 19, 86, 27, 90],
      label: 'Series B',
      borderWidth: 1,
      fill: false,
      pointRadius: 10,
      pointHoverRadius: 15,
      showLine: false
   },{
      data: [18, 48, 77, 9, 100, 27, 40],
      label: 'Series C',
      borderWidth: 1,
      fill: false,
      pointRadius: 10,
      pointHoverRadius: 15,
      showLine: false
   }];

   linePointChartOptions: any = {
      elements: {
         point: {
            pointStyle: 'rectRot',
         }
      }
   };

  	// Pie
  	public pieChartData:number[] = [300, 500, 100];
  	public pieChartType:string = 'pie';
   pieChartColors: any[] = [{
      backgroundColor: ['#3a84eb', '#1862c6', '#5cabff', '#414658', '#F8C51C']
   }];

      PieChartOptions: any = {
      elements: {
         arc: {
            borderWidth: 0
         }
      }
   }

   // Doughnut
   public doughnutChartData:number[] = [350, 450, 100];
   public doughnutChartType:string = 'doughnut';

	// PolarArea
  	public polarAreaChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  	public polarAreaChartData:number[] = [300, 500, 100, 40, 120];
  	public polarAreaLegend:boolean = false;
  	public polarAreaChartType:string = 'polarArea';

  	// Radar
  	public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
   public radarChartData:any = [
    	{data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    	{data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  	];
  	public radarChartType:string = 'radar';

  	// Bubble Chart
  	bubbleChartData: Array <any> = [{
      data: [{
         x: 6,
         y: 5,
         r: 15,
      }, {
         x: 5,
         y: 4,
         r: 10,
      }, {
         x: 8,
         y: 4,
         r: 6,
      }, {
         x: 8,
         y: 4,
         r: 6,
      }, {
         x: 5,
         y: 14,
         r: 14,
      }, {
         x: 5,
         y: 6,
         r: 8,
      }, {
         x: 4,
         y: 2,
         r: 10,
      }],
      label: 'Series A',
      borderWidth: 1
  	}];
  	bubbleChartType = 'bubble';

   public bubbleChartOptions:any = {
      responsive: true,
      elements: {
         points: {
            borderWidth: 1,
            borderColor: 'rgb(0, 0, 0)'
         }
      }
  	};

   //Mixed Chart
   mixedPointChartData: Array <any> = [
      {
         data: [6, 5, 8, 8, 5, 5, 4],
         label: 'Series A',
         borderWidth: 1,
         type: 'line',
         fill: false
      },
      {
         data: [5, 4, 4, 2, 6, 2, 5],
         label: 'Series B',
         borderWidth: 1,
         type: 'bar',
      }];

    mixedChartOptions: any = {
      responsive: true,
      scales: {
         xAxes: [{
            gridLines: {
               color: 'rgba(0,0,0,0.02)',
               zeroLineColor: 'rgba(0,0,0,0.02)'
            }
         }],
         yAxes: [{
            gridLines: {
               color: 'rgba(0,0,0,0.02)',
               zeroLineColor: 'rgba(0,0,0,0.02)'
            },
            ticks: {
               beginAtZero: true,
               suggestedMax: 9,
            }
         }]
      }
   };
}



