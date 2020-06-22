import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-coming-soonV2',
  templateUrl: './coming-soonV2.component.html',
  styleUrls: ['./coming-soonV2.component.scss']
})

export class ComingsoonV2Component implements OnInit {

	days 					: any;
	hours 				: any;
	minutes		 		: any;
	seconds  			: any;
	difference			: any;
	countDownDate     : any;
	currentTimeStamp  : any = new Date().getTime();

	constructor(public translate: TranslateService) { }

	ngOnInit() {
		this.countDownDate = this.currentTimeStamp+(86400*10*1000);
		setInterval(() => {	
			this.counterDown();
		},1000)
	}

	//counterDown method is used to Time calculations for days, hours, minutes and seconds.
	counterDown() {
		this.currentTimeStamp = new Date().getTime();
		this.difference = this.countDownDate - this.currentTimeStamp;
		this.days = Math.floor(this.difference / (1000 * 60 * 60 * 24));
		this.hours = Math.floor((this.difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		this.minutes = Math.floor((this.difference % (1000 * 60 * 60)) / (1000 * 60));
		this.seconds = Math.floor((this.difference % (1000 * 60)) / 1000);
	}

}
