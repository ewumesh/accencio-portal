import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-edit-contact-list',
	templateUrl: './edit-contact-list.component.html',
	styleUrls: ['./edit-contact-list.component.scss']
})

export class EditContactListComponent implements OnInit, OnDestroy {

	form : FormGroup
	data : any;

	socialIcons	: any = [
		{
			link : "https://www.facebook.com",
			icon : "fa-facebook",
			socialIconClass : "btn-fb"
		},
		{
			link : "https://www.twitter.com",
			icon : "fa-twitter",
			socialIconClass : "btn-tw"
		},
		{
			link : "https://www.linkedin.com",
			icon : "fa-linkedin",
			socialIconClass : "btn-li"
		},
		{
			link : "https://www.instagram.com",
			icon : "fa-instagram",
			socialIconClass : "btn-ins"
		}
	]

	constructor(  public  activeModal : NgbActiveModal, 
                 private formBuilder : FormBuilder,
                 public translate: TranslateService) { }

	ngOnInit() 
		{
		this.form = this.formBuilder.group({
			firstName		: [],
			lastName 		: [],
			email  			: [],
			phoneNumber 	: [],
			company			: [],
			location			: [],
			work				: [],
			etc 				: []
		});

		if(this.data){
			this.form.patchValue({
				firstName    : this.data.firstName,
				lastName		 : this.data.lastName,
				email 		 : this.data.email,
				phoneNumber  : this.data.phoneNumber,
				company		 : this.data.company,
				work 			 : this.data.work,
				location		 : this.data.location,
				etc 			 : this.data.etc
			});
		}

		var body = document.body;
      body.classList.add("contact-modal");   
	}

	/**
	  *onFormSubmit method is used to submit the edit new user dialaog form and close the dialog.
	  */
	onFormSubmit(){
		this.activeModal.close(this.form.value);
	}

	ngOnDestroy(){
		var body = document.body;
		body.classList.remove("contact-modal");
	}
}
