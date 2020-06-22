import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-course-detail-top-review',
  templateUrl: './course-detail-top-review.component.html',
  styleUrls: ['./course-detail-top-review.component.scss']
})
export class CourseDetailTopReviewComponent implements OnInit {

	@Input() topReviews : any;
	
	constructor(public translate: TranslateService) { }

	ngOnInit() {
	}

}
