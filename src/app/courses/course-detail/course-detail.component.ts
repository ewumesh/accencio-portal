import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { CoreService } from '../../service/core/core-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-course-detail',
   templateUrl: './course-detail.component.html',
   styleUrls: ['./course-detail.component.scss']
})

export class CourseDetailComponent implements OnInit {

   jsonResponse       : any = [];
   showMoreStatus     : boolean = true;
   showSyllabousCount = 3;

   constructor(private pageTitleService : PageTitleService,
               public coreService       : CoreService,
               public translate         : TranslateService) { }

   ngOnInit() {
      this.translate.get("Course Detail").subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });

      this.getCourses();
   }

   /** 
     * getCourses method is used to get the courses list.
     */
   getCourses() {
      this.coreService.getCourses().
            subscribe( res => { this.jsonResponse = res},
                       err => console.log(err),
                       () => this.jsonResponse
                     );
   }

   /**
     * showSyllabousMore method is used to show the more syllabous of course.
     */
   showSyllabousMore(){
      this.showSyllabousCount = this.jsonResponse.courseDetail.syllabous.length;
      this.showMoreStatus = false;
   }


}
