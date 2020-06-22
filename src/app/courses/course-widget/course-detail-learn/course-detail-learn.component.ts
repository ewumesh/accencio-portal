import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-detail-learn',
  templateUrl: './course-detail-learn.component.html',
  styleUrls: ['./course-detail-learn.component.scss']
})
export class CourseDetailLearnComponent implements OnInit {

	@Input() courseLearn : any;

	constructor() { }

	ngOnInit() {
	}

}
