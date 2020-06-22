import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

	@Input() videoUrl : any;
	yt_iframe_html : any;

	constructor(public activeModal: NgbActiveModal,
					private embedService: EmbedVideoService) { }

	ngOnInit() {
		setTimeout(()=> {
			this.yt_iframe_html = this.embedService.embed(this.videoUrl);
		},200)

		var body = document.body;
		body.classList.add("video-popup");	
	}

	ngOnDestroy(){
		var body = document.body;
		body.classList.remove("video-popup");
	}
}
