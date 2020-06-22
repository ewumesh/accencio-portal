import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-detail-faq',
  templateUrl: './course-detail-faq.component.html',
  styleUrls: ['./course-detail-faq.component.scss']
})
export class CourseDetailFaqComponent implements OnInit {

	@Input() courseFaq : any;
	
	constructor() { }

	ngOnInit() {
	}

}
