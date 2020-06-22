import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import './ckeditor.loader';
import 'ckeditor';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ms-ckeditor',
  templateUrl: './ckeditor.html',
  styleUrls: ['./ckeditor.scss'],
  encapsulation: ViewEncapsulation.None
})

export class Ckeditor implements OnInit {
   public ckeditorContent:string = '<p>Hello CKEditor</p>';
   public config = {
      uiColor: '#dee4e8',
      height: '500',
   };

  constructor(private pageTitleService: PageTitleService,
              public translate: TranslateService) {}
  
   ngOnInit() {
      this.translate.get('Ckeditor').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }  
}
