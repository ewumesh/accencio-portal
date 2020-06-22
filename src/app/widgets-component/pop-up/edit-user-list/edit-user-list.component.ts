import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-edit-user-list',
  templateUrl: './edit-user-list.component.html',
  styleUrls: ['./edit-user-list.component.scss']
})
export class EditUserListComponent implements OnInit, OnDestroy {

	form : FormGroup
	data : any;

	constructor(  public activeModal : NgbActiveModal, 
                 private formBuilder : FormBuilder,
                 public translate: TranslateService) { }
	ngOnInit() 
		{
		this.form = this.formBuilder.group({
			firstName		: [],
			lastName 		: [],
			email  			: [],
			accountType 	: []
		});

		if(this.data){
			this.form.patchValue({
				firstName    : this.data.firstName,
				lastName		 : this.data.lastName,
				email 		 : this.data.email,
				accountType  : this.data.accountType
			});
		}

		var body = document.body;
      	body.classList.add("management-modal");   
	}

	/**
	  *onFormSubmit method is used to submit the edit new user dialaog form and close the dialog.
	  */
	onFormSubmit(){
		this.activeModal.close(this.form.value);
	}

	ngOnDestroy(){
      var body = document.body;
      body.classList.remove("management-modal");
   }
}