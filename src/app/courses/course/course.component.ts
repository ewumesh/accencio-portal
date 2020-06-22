import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { CoreService } from '../../service/core/core-service.service';
declare var $ : any;
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-course',
   templateUrl: './course.component.html',
   styleUrls: ['./course.component.scss']
})

export class CourseComponent implements OnInit {

   showCount       : number = 4;
   showMoreStatus  : boolean = true;
   jsonResponse    : any = [];

   courseDeveloper : any = [
      "App Development",
      "Mobile Development",
      "Algorithm",
      "Web Development",
      "Web Designing",
      "Php Development"
   ]

   skill : any [] =[
      "Syntax & Sementics",
      "Blockchains",
      "Routing"
   ]

   job_title : any [] =[
      "Web Designer",
      "Web Developer",
      "Php Developer",
      "Golang Developer"
   ]

   course_level : any [] =[
      "Intermediate",
      "Beginner",
      "Advance"
   ]

   course_language : any [] =[
      "English",
      "French",
      "German",
      "Hindi"
   ]

   trendingCourseSlideConfig  = {"slidesToShow": 4, "slidesToScroll": 1,"arrows": true,"autoplay": true, "autoplaySpeed": 1500,
      "responsive": [
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2
            }
         },
         {
            breakpoint: 575,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows:false
            }
         }
      ]};

   testimonialSlideConfig  = {"slidesToShow": 1, "slidesToScroll": 1,"arrows": false,"dots": true,"autoplay": true, "autoplaySpeed": 1500};

   constructor(private pageTitleService : PageTitleService,
               public coreService : CoreService,
               public translate: TranslateService) { }

   ngOnInit() {
      this.translate.get('Course').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });

      $('[data-toggle="tooltip"]').tooltip();
      $('[data-toggle="popover"]').popover();

      this.getCourses();

      var dropDownSelection = document.getElementsByClassName('dropdown-menu');
      for(var i = 0; i < dropDownSelection.length; i++) {
         (function(index) {
            dropDownSelection[index].addEventListener("click", function(event) {
               event.stopPropagation();
            })   
         })(i);
      }
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
     * getCoursesByType method is used to get the type of courses.
     */
   getCoursesByType(type,i) {
      let course = [];
      if (this.jsonResponse.courses && this.jsonResponse.courses.length>0){
         for (let list of this.jsonResponse.courses){
            if(list.type == type){
               course.push(list);
            }
         }
         return course;
      }
   }

   /**
     * showMorePopularCourse method is used to show the popular courses more.
     */
   showMorePopularCourse() {
      this.showMoreStatus = false;
      this.showCount = this.jsonResponse.courses.length;
   }
}
