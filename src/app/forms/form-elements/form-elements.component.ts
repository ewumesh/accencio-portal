import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'ms-form-elements',
	templateUrl:'./form-elements-component.html',
	styleUrls: ['./form-elements-component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class FormElementsComponent  implements OnInit{

	constructor(private pageTitleService: PageTitleService,
	          	public translate: TranslateService) {}

	ngOnInit() {
		this.translate.get('Form Elements').subscribe((res: string) => {
			this.pageTitleService.setTitle(res);
		});
	}
}



