import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-editor',
   templateUrl:'./editor-component.html',
   styleUrls: ['./editor-component.scss'],
   encapsulation: ViewEncapsulation.None
})

export class EditorComponent implements OnInit {

   text: string;

   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

   ngOnInit() {
      this.translate.get('WYSIWYG Editor').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }  
}



