import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-form-wizard',
    templateUrl:'./form-wizard-component.html',
    styleUrls: ['./form-wizard-component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FormWizardComponent  implements OnInit{

   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

   ngOnInit() {
      this.translate.get('Form Wizard').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }

   //finishFunction method is used to when form wizard form completed.
   finishFunction(){
      console.log("form wizard is completed");
   }
}



