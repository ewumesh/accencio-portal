import { Routes } from '@angular/router';

import { CourseComponent } from './course/course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

export const CoursesRoutes: Routes = [
   {
      path: '',
      redirectTo: 'courses',
      pathMatch: 'full',
   }, 
   {
      path: '',
      children: [
         {
            path: 'courses',
            component: CourseComponent
         }, 
         {
            path: 'course-detail',
            component: CourseDetailComponent
         },
      ]
   }
];