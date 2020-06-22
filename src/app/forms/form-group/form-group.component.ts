import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-form-group',
   templateUrl:'./form-group-component.html',
   styleUrls: ['./form-group-component.scss'],
   encapsulation: ViewEncapsulation.None
})

export class FormGroupComponent  implements OnInit{

   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

   ngOnInit() {
      this.translate.get('Form Group').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }
}



