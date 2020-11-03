import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { Subscription } from 'rxjs';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { VideoPlayerComponent } from '../../widgets-component/pop-up/video-player/video-player.component';
import { PaymentMessageComponent } from '../../widgets-component/pop-up/payment-message/payment-message.component';
import { DegreeDetailsComponent } from '../../widgets-component/pop-up/degree-details/degree-details.component';
import { AddNewUserComponent } from '../../widgets-component/pop-up/add-new-user/add-new-user.component';
import { DeleteUserComponent } from '../../widgets-component/pop-up/delete-user/delete-user.component';
import { EditUserListComponent } from '../../widgets-component/pop-up/edit-user-list/edit-user-list.component';
import { EditContactListComponent } from '../../widgets-component/pop-up/edit-contact-list/edit-contact-list.component';
import { ViewListComponent } from '../../widgets-component/pop-up/view-list/view-list.component';
import { AddCommentComponent } from '../../widgets-component/pop-up/add-comment/add-comment.component';
import { AddFeedbackComponent } from '../../widgets-component/pop-up/add-feedback/add-feedback.component';
import { AddNewContactComponent } from '../../widgets-component/pop-up/add-new-contact/add-new-contact.component';
import { ARequest } from 'request/request';
import { ASession } from 'request/session';

@Injectable({
	providedIn: 'root'
})

export class LicenceService {

	constructor( private request : ARequest,
				 private session: ASession ) { }

	
}
