import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-detail-description2',
  templateUrl: './course-detail-description2.component.html',
  styleUrls: ['./course-detail-description2.component.scss']
})

export class CourseDetailDescription2Component implements OnInit {

	@Input() courseDescription : any;
	
	constructor() { }

	ngOnInit() {
	}

}
