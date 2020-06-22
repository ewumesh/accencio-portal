import { Component, OnInit, Input } from '@angular/core';
import { CoreService } from '../../../service/core/core-service.service';

@Component({
  selector: 'app-course-degree',
  templateUrl: './course-degree.component.html',
  styleUrls: ['./course-degree.component.scss']
})

export class CourseDegreeComponent implements OnInit {
	
	@Input() earnDegree : any;

	constructor(private coreService : CoreService) { }

	ngOnInit() {
	}

	//openDetails Method is used to open a degree detail dialog pop up.
	openDetails() {
		this.coreService.openDegreeDetailDialog();
	}

}
