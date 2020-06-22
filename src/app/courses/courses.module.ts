import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CardModule } from 'ngx-card/ngx-card';
import { BarRatingModule } from "ngx-bar-rating";
import { NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { WidgetsComponentModule } from '../widgets-component/widgets-component.module';
import { CourseComponent } from './course/course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursePaymentComponent } from './course-payment/course-payment.component';
import { CourseSigninComponent } from './course-signin/course-signin.component';
import { CoursesRoutes } from './courses.routing';
import { CourseDegreeComponent } from './course-widget/course-degree/course-degree.component';
import { CourseCardComponent } from './course-widget/course-card/course-card.component';
import { Course_DetailComponent } from './course-widget/course-detail/course-detail.component';
import { CourseTestimonialComponent } from './course-widget/course-testimonial/course-testimonial.component';
import { CourseDetailAboutComponent } from './course-widget/course-detail-about/course-detail-about.component';
import { CourseDetailLearnComponent } from './course-widget/course-detail-learn/course-detail-learn.component';
import { CourseDetailSkillsComponent } from './course-widget/course-detail-skills/course-detail-skills.component';
import { CourseDetailInstructorComponent } from './course-widget/course-detail-instructor/course-detail-instructor.component';
import { CourseDetailFeatureComponent } from './course-widget/course-detail-feature/course-detail-feature.component';
import { CourseDetailSyllabusComponent } from './course-widget/course-detail-syllabus/course-detail-syllabus.component';
import { CourseDetailReviewComponent } from './course-widget/course-detail-review/course-detail-review.component';
import { CourseDetailTopReviewComponent } from './course-widget/course-detail-top-review/course-detail-top-review.component';
import { CourseDetailFaqComponent } from './course-widget/course-detail-faq/course-detail-faq.component';
import { CourseDetailDescription1Component } from './course-widget/course-detail-description1/course-detail-description1.component';
import { CourseDetailDescription2Component } from './course-widget/course-detail-description2/course-detail-description2.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild(CoursesRoutes),
		SlickCarouselModule,
		CardModule,
		BarRatingModule,
		ReactiveFormsModule,
		NgbModalModule,
		WidgetsComponentModule,
		TranslateModule
	],
	declarations: [
		CourseComponent,
		CourseDetailComponent,
		CoursePaymentComponent,
		CourseSigninComponent,
		CourseDegreeComponent,
		CourseCardComponent,
		Course_DetailComponent,
		CourseTestimonialComponent,
		CourseDetailAboutComponent,
		CourseDetailLearnComponent,
		CourseDetailSkillsComponent,
		CourseDetailInstructorComponent,
		CourseDetailFeatureComponent,
		CourseDetailSyllabusComponent,
		CourseDetailReviewComponent,
		CourseDetailTopReviewComponent,
		CourseDetailFaqComponent,
		CourseDetailDescription1Component,
		CourseDetailDescription2Component
	],
	exports : [
		CourseComponent
	]
})

export class CoursesModule { }
