import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-detail-review',
  templateUrl: './course-detail-review.component.html',
  styleUrls: ['./course-detail-review.component.scss']
})

export class CourseDetailReviewComponent implements OnInit {

	@Input() coureReviews : any;
	
	constructor() { }

	ngOnInit() {
	}

}
