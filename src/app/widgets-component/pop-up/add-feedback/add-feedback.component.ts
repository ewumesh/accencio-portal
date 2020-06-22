import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.scss']
})
export class AddFeedbackComponent implements OnInit, OnDestroy {

	addNewFeedbackForm  : FormGroup;

	constructor(public  activeModal: NgbActiveModal,
		 			private formBuilder : FormBuilder,
               public translate: TranslateService) { }

	ngOnInit() {
		this.addNewFeedbackForm = this.formBuilder.group({
         heading    : [''],
         detail     : ['']
      })

      var body = document.body;
      body.classList.add("feedback-modal");   
	}	

   // onFormSubmit method is submit a add new user form.
   onFormSubmit(){
      this.activeModal.close(this.addNewFeedbackForm.value);
   }


   ngOnDestroy(){
      var body = document.body;
      body.classList.remove("feedback-modal");
   }

}
