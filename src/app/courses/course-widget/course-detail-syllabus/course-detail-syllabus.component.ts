import { Component, OnInit, Input } from '@angular/core';
import { CoreService } from '../../../service/core/core-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-course-detail-syllabus',
  templateUrl: './course-detail-syllabus.component.html',
  styleUrls: ['./course-detail-syllabus.component.scss']
})
export class CourseDetailSyllabusComponent implements OnInit {

	@Input() syllabous : any;

	constructor(private coreService : CoreService,
               public translate: TranslateService) { }

	ngOnInit() {
	}

	/**
     * showMore method is used to automatically create shpw more or show less button to show/hide content.
     */
	showMore(id) {
		if(document.getElementById('show-content'+id).className == 'more-content d-none'){
			document.getElementById('show-content'+id).className = 'more-content';
			document.getElementById("show-more"+id).innerHTML = "Show Less";
		}
		else{
			document.getElementById('show-content'+id).className = 'more-content d-none';
			document.getElementById("show-more"+id).innerHTML = "Show More";
		}
	}

	/**
	  * onVideoPlayer method is used to open a video player pop up.
	  */
	 onVideoPlayer(videoUrl){
		this.coreService.openVideoPlayerDialog(videoUrl);
	}

}
