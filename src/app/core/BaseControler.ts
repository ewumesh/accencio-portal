import { CourseDetailInstructorComponent } from "app/courses/course-widget/course-detail-instructor/course-detail-instructor.component"
import { APP_INITIALIZER } from '@angular/core'
import { AuthServices } from 'app/service/auth/auth.service';

export class BaseComponent {

    constructor(authService: AuthServices) {
        //authService.getUserInfo();
        //authService.getOrg();
    }
}
