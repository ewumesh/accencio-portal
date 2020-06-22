import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../service/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
   selector: 'ms-register-session',
   templateUrl:'./register-component.html',
   styleUrls: ['./register-component.scss'],
   encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent implements OnInit {
   
   ngForm  : FormGroup;
   emailPattern    : string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";

   constructor(
      private router: Router,
      private authService : AuthService,
      private formBuilder : FormBuilder,
      public translate: TranslateService
   ) { }

   ngOnInit(){
      this.ngForm = this.formBuilder.group({
         firstName    : ['',[Validators.required]],
         lastName     : ['',[Validators.required]],
         email        : ['',[Validators.required,Validators.pattern(this.emailPattern)]],
         password     : ['',[Validators.required]]
      })
   }
   
   //register method is used to sign up on the template.
   register() {
      if(this.ngForm.valid) {
         this.authService.signupUserProfile(this.ngForm.value);
      }
   }
}