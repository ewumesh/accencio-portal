import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-testimonial',
  templateUrl: './course-testimonial.component.html',
  styleUrls: ['./course-testimonial.component.scss']
})

export class CourseTestimonialComponent implements OnInit {

	@Input() testimonial : any;

	constructor() { }

	ngOnInit() {
	}

}
