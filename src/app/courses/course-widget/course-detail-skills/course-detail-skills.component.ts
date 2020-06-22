import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-detail-skills',
  templateUrl: './course-detail-skills.component.html',
  styleUrls: ['./course-detail-skills.component.scss']
})

export class CourseDetailSkillsComponent implements OnInit {

	@Input() skillsGain : any;

	constructor() { }

	ngOnInit() {
	}

}
