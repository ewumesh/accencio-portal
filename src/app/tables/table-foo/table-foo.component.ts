import { Component, ViewChild, OnInit ,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';
declare var $ : any;

@Component({
    selector: 'ms-foo-table',
    templateUrl:'./table-foo-component.html',
    styleUrls: ['./table-foo-component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FooTableComponent implements OnInit {

   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {
   }

   ngOnInit() {
      this.translate.get('Foo Table').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
      $('.table').footable();
   }
}



