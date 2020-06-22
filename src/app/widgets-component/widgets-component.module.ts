import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentMessageComponent } from './pop-up/payment-message/payment-message.component';
import { VideoPlayerComponent } from './pop-up/video-player/video-player.component';
import { EmbedVideo } from 'ngx-embed-video';
import { DegreeDetailsComponent } from './pop-up/degree-details/degree-details.component';
import { AddNewUserComponent } from './pop-up/add-new-user/add-new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { DeleteUserComponent } from './pop-up/delete-user/delete-user.component';
import { EditUserListComponent } from './pop-up/edit-user-list/edit-user-list.component';
import { EditContactListComponent } from './pop-up/edit-contact-list/edit-contact-list.component';
import { SocialMediaComponent } from './social-icon/social-media/social-media.component';
import { ViewListComponent } from './pop-up/view-list/view-list.component';
import { AddFeedbackComponent } from './pop-up/add-feedback/add-feedback.component';
import { AddCommentComponent } from './pop-up/add-comment/add-comment.component';
import { AddNewContactComponent } from './pop-up/add-new-contact/add-new-contact.component';

@NgModule({
	imports: [
		CommonModule,
		EmbedVideo.forRoot(),
		FormsModule,
		ReactiveFormsModule,
		TranslateModule
	],
	declarations: [
		PaymentMessageComponent,
		VideoPlayerComponent,
		DegreeDetailsComponent,
		AddNewUserComponent,
		DeleteUserComponent,
		EditUserListComponent,
		EditContactListComponent,
		SocialMediaComponent,
		ViewListComponent,
		AddFeedbackComponent,
		AddCommentComponent,
		AddNewContactComponent
	],
	entryComponents: [
		PaymentMessageComponent,
		VideoPlayerComponent,
		DegreeDetailsComponent,
		AddNewUserComponent,
		DeleteUserComponent,
		EditUserListComponent,
		EditContactListComponent,
		ViewListComponent,
		AddFeedbackComponent,
		AddCommentComponent,
		AddNewContactComponent
	],
	exports: [
		SocialMediaComponent
	]
})

export class WidgetsComponentModule { }
