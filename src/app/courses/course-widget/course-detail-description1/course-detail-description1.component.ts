import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-course-detail-description1',
	templateUrl: './course-detail-description1.component.html',
	styleUrls: ['./course-detail-description1.component.scss']
})

export class CourseDetailDescription1Component implements OnInit {

	@Input() courseDescription : any;

	constructor() { }

	ngOnInit() {
	}

}
