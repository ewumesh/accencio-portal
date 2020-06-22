"use strict";

import { Component, ViewChild, OnInit ,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-responsive-table',
    templateUrl:'./table-responsive-component.html',
    styleUrls: ['./table-responsive-component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ResponsiveTableComponent implements OnInit {

   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {
   }

   ngOnInit() {
      this.translate.get('Responsive').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }
}



