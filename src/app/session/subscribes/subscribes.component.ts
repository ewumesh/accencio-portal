import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-subscribes',
    templateUrl: './subscribes.component.html',
    styleUrls: ['./subscribes.component.scss']
})

export class SubscribesComponent implements OnInit {

  	constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) { }

	ngOnInit() {
		this.pageTitleService.setTitle("Subscribes");
	}

}
