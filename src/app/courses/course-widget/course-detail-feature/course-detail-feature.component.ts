import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-detail-feature',
  templateUrl: './course-detail-feature.component.html',
  styleUrls: ['./course-detail-feature.component.scss']
})
export class CourseDetailFeatureComponent implements OnInit {

	@Input() courseFeature : any;

	constructor() { }

	ngOnInit() {
	}

}
