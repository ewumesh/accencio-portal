import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class Course_DetailComponent implements OnInit {

	@Input() course : any; 

	constructor() { }

	ngOnInit() {
	}

}
