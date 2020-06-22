import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.scss']
})
export class AddNewContactComponent implements OnInit, OnDestroy {
	
	addNewContactForm  : FormGroup;
	emailPattern       : string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

 	constructor(  public  activeModal : NgbActiveModal, 
                 private formBuilder : FormBuilder,
                 public translate: TranslateService) { }

	ngOnInit() {
		this.addNewContactForm = this.formBuilder.group({
			firstName		: ['',[Validators.required]],
			lastName 		: ['',[Validators.required]],
			email          : ['',[Validators.required,Validators.pattern(this.emailPattern)]],
			phoneNumber 	: ['',[Validators.required]],
			company			: ['',[Validators.required]],
			location			: ['',[Validators.required]],
			work				: ['',[Validators.required]],
			etc 				: ['',[Validators.required]]
		});

		var body = document.body;
      body.classList.add("contact-modal");   
	}

	/**
	  *onFormSubmit method is used to submit the edit new user dialaog form and close the dialog.
	  */
	onFormSubmit(){
		this.activeModal.close(this.addNewContactForm.value);
	}

	ngOnDestroy(){
		var body = document.body;
		body.classList.remove("contact-modal");
	}
}

