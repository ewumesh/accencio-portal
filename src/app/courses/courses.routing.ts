import { Routes } from '@angular/router';

import { CourseComponent } from './course/course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursePaymentComponent } from './course-payment/course-payment.component';
import { CourseSigninComponent } from './course-signin/course-signin.component';

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
         {
            path: 'course-payment',
            component: CoursePaymentComponent
         },
         {
            path: 'course-signin',
            component: CourseSigninComponent
         }
      ]
   }
];