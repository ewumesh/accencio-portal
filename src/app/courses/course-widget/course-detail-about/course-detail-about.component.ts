import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-detail-about',
  templateUrl: './course-detail-about.component.html',
  styleUrls: ['./course-detail-about.component.scss']
})
export class CourseDetailAboutComponent implements OnInit {

	@Input() aboutCourse : any; 

	constructor() { }

	ngOnInit() {
	}

}
