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

@Injectable({
	providedIn: 'root'
})

export class CoreService {

	public rtlShowStatus : boolean = false;
	constructor( private http : HttpClient,
				 private modalService: NgbModal ) { }

	/**
	  * getCourses method is used to get the courses data from json file.
	  */
	getCourses() {
		return this.http.get('assets/data/courses.json').map(response => response);
	}

	/**
	  * openVideoPlayerDialog method is used to open a video player pop up.
	  */
	 openVideoPlayerDialog(videoUrl) {
		const modalRef = this.modalService.open(VideoPlayerComponent);
		modalRef.componentInstance.videoUrl = videoUrl;
	}

	/**
	  * openPaymentMessageDialog method is used to open a payment message pop up.
	  */
	openPaymentMessageDialog(message) {
		const modalRef = this.modalService.open(PaymentMessageComponent);
        modalRef.componentInstance.title = message;
	}

	/**
	  * openPaymentMessageDialog method is used to open a payment message pop up.
	  */
	openDegreeDetailDialog() {
		const modalRef = this.modalService.open(DegreeDetailsComponent);
	}

	/**
	  * addNewUserDialog function is used to open Add Dialog Component. 
	  */
	addNewUserDialog() {
		const modalRef = this.modalService.open(AddNewUserComponent);
		
		return modalRef.result;
	}

	/**
	  * deleteUserDialog function is used to open Delete Dialog Component. 
	  */
	deleteUserDialog(titleMessage) {
		const modalRef = this.modalService.open(DeleteUserComponent);
		 modalRef.componentInstance.titleMessage = titleMessage;
		 
		return modalRef.result;
	}

	/**
	  * editList function is used to open Edit Dialog Component. 
	  */
	editUserList(data){
		const modalRef = this.modalService.open(EditUserListComponent);
		modalRef.componentInstance.data = data;
		
		return modalRef.result;
	}

	/**
	  * editList function is used to open Edit Dialog Component. 
	  */
	editContactList(data){
		const modalRef = this.modalService.open(EditContactListComponent);
		modalRef.componentInstance.data = data;
		
		return modalRef.result;
	}

	/**
	  * addNewContactDialog function is used to open Add Contact Dialog Component. 
	  */
	addNewContactDialog() {
		const modalRef = this.modalService.open(AddNewContactComponent);
		
		return modalRef.result;
	}

	/**
	  * viewList function is used to open View Dialog Component. 
	  */
	viewList(data) {
		const modalRef = this.modalService.open(ViewListComponent);
		modalRef.componentInstance.data = data;
	}

	/**
	  * addCommentDialog function is used to open Add comment Dialog Component. 
	  */
	addCommentDialog(){
		const modalRef = this.modalService.open(AddCommentComponent);
	}

	/**
	  * addFeedbackDialog function is used to open Add feedback Dialog Component. 
	  */
	addFeedbackDialog(){
		const modalRef = this.modalService.open(AddFeedbackComponent);
		
		return modalRef.result;
	}
}
