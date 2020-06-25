import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  encapsulation : ViewEncapsulation.None
})

export class VideoPlayerComponent implements OnInit {

	constructor(private pageTitleService : PageTitleService,
                public translate: TranslateService) { }

	ngOnInit() {
		this.translate.get('Video Player').subscribe((res: string) => {
			this.pageTitleService.setTitle(res);
		});
	}

}
