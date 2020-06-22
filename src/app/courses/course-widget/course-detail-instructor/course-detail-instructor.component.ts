import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-detail-instructor',
  templateUrl: './course-detail-instructor.component.html',
  styleUrls: ['./course-detail-instructor.component.scss']
})

export class CourseDetailInstructorComponent implements OnInit {

	@Input() instructor : any;

	constructor() { }

	ngOnInit() {
	}

}
