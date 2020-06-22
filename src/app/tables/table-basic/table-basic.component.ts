import { Component, ViewChild, OnInit ,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-basic-table',
   templateUrl:'./table-basic-component.html',
   styleUrls: ['./table-basic-component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class BasicTableComponent implements OnInit {


   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {
   }

   ngOnInit() {
      this.translate.get('Basic').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }
}



