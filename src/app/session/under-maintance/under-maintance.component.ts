import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'ms-under-maintance',
	templateUrl: './under-maintance.component.html',
	styleUrls: ['./under-maintance.component.scss']
})

export class UnderMaintanceComponent implements OnInit {

  	constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) { }

	ngOnInit() {
		this.pageTitleService.setTitle("Under Maintance");
	}

}
