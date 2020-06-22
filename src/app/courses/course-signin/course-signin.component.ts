import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-course-signin',
   templateUrl: './course-signin.component.html',
   styleUrls: ['./course-signin.component.scss']
})

export class CourseSigninComponent implements OnInit {

   constructor(private pageTitleService : PageTitleService,
               public router : RouterModule,
               public translate : TranslateService) { }

   ngOnInit() {
   	this.translate.get('Sign In').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }

}
