import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
   selector: 'ms-formvalidation',
   templateUrl:'./formvalidation-component.html',
   styleUrls: ['./formvalidation-component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class FormValidationComponent implements OnInit {

	public  form : FormGroup;
  
  	constructor(private fb: FormBuilder,
               private pageTitleService: PageTitleService,
               public translate: TranslateService) {}

  	ngOnInit() {
      this.translate.get('Form Validation').subscribe((res: string) => {
        this.pageTitleService.setTitle(res);
      });

    	this.form = this.fb.group({
      	fname: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      	email: [null, Validators.compose([Validators.required, CustomValidators.email])],
      	range: [null, Validators.compose([Validators.required, CustomValidators.range([5, 9])])],
      	url: [null, Validators.compose([Validators.required, CustomValidators.url])],
      	date: [null, Validators.compose([Validators.required, CustomValidators.date])],
      	creditCard: [null, Validators.compose([Validators.required, CustomValidators.creditCard])],
      	phone: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      	password: password,
      	confirmPassword: confirmPassword
    	});
  	}  
}



