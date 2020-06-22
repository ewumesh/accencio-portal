import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-easy-pie',
   templateUrl:'./easy-pie-chart-component.html',
   styleUrls: ['./easy-pie-chart-component.scss'],
   encapsulation: ViewEncapsulation.None
})

export class EasyPieChartComponent implements OnInit  {
	
 	public percent: number;
 	public percent2: number;
   public percent3: number;
   public percent4: number;
  	public options: any;
  	public options2: any;
	public options3: any;
	public options4: any;

 
  	constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {
    
    	this.percent = 80;
    	this.options = {
      		barColor: '#1862c6',
      		trackColor: '#dee4e8',
      		scaleColor: false,
      		scaleLength: 5,
      		lineCap: 'round',
      		lineWidth: 3,
      		size: 300,
      		rotate: 0,
      		animate: {
          		duration: 3000,
          		enabled: true
      		}
    	};

    	this.percent2 = 70;
    	this.options2 = {
      		barColor: '#3a84eb',
      		trackColor: '#dee4e8',
      		scaleColor: '#dee4e8',
      		scaleLength: 5,
      		lineCap: 'round',
      		lineWidth: 3,
      		size: 300,
      		rotate: 0,
      		animate: {
          		duration: 3000,
          		enabled: true
      		}
    	};
        
      this.percent3 = 100;
    	this.options3 = {
      		barColor: '#568AD0',
      		trackColor: '#dee4e8',
      		scaleColor: '#dee4e8',
      		scaleLength: 5,
      		lineCap: 'round',
      		lineWidth: 10,
      		size: 300,
      		rotate: 0,
      		animate: {
          		duration: 3000,
          		enabled: true
      		}
    	};
        
      this.percent4 = 90;
    	this.options4 = {
      		barColor: '#414658',
      		trackColor: '#dee4e8',
      		scaleColor: '#dee4e8',
      		scaleLength: 5,
      		lineCap: 'round',
      		lineWidth: 20,
      		size: 300,
      		rotate: 0,
      		animate: {
          		duration: 3000,
          		enabled: true
      		}
    	};
  	}

   ngOnInit() {
      this.translate.get('Easy Pie').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }

}



