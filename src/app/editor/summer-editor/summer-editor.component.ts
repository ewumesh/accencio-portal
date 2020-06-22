import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
declare var jQuery: any;
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ms-summer-editor',
  templateUrl: './summer-editor.html',
  styleUrls: ['./summer-editor.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SummerEditorComponent implements AfterViewInit {

   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

   ngAfterViewInit() {   
      this.translate.get('Summer Editor').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });  

      jQuery("#summernote").summernote(
      {
         height: 400, 
         minHeight: null,
         maxHeight: null, 
         focus: true 
      });
   }
}
