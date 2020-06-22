import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

import { PageTitleService } from '../../core/page-title/page-title.service';
import { CoreService } from '../../service/core/core-service.service';

@Component({
   selector: 'ms-course-payment',
   templateUrl: './course-payment.component.html',
   styleUrls: ['./course-payment.component.scss']
})

export class CoursePaymentComponent implements OnInit {

   public form : FormGroup;

   constructor(private pageTitleService : PageTitleService,
               private formBuilder : FormBuilder,
               private coreService : CoreService,
                public translate : TranslateService) { }

   ngOnInit() {
      this.translate.get('Payment').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });

      this.form = this.formBuilder.group({
         cardNumber       : [null,Validators.required],
         cardName         : [null,Validators.required],
         cardCvv          : [null,Validators.required],
         cardExpiryDate   : [null,Validators.required]
      })
   }

   /**
     * when valid form is submitted then thank you message show.
     */
   onSubmit(form) {
      if(form.valid) {
         this.coreService.openPaymentMessageDialog('Thank You, Your payment has been processed successfully.');
      }
   }
}
