import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../service/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
   selector: 'ms-forgot-password',
   templateUrl: './forgot-password-component.html',
   styleUrls: ['./forgot-password-component.scss'],
   encapsulation: ViewEncapsulation.None,
})

export class ForgotPasswordComponent implements OnInit {

   public message = '';
   public form: FormGroup;
   public step = 0;
   constructor(private fb: FormBuilder,
      private router: Router,
      private toastr: ToastrService,
      private authService: AuthService,
      public translate: TranslateService) { }

   ngOnInit() {
      this.form = this.fb.group({
         username: [null, Validators.compose([Validators.required])],
         code: [null],
         password: [null]
      });
   }

   forgetPassword(value) {
      this.message = '';
      debugger;
      if (this.step === 0 && value.username != undefined) {
         this.authService.resetPassword(value.username).subscribe(res => {
            if (res.status !== 'success') {
               this.message = res.message;
            } else {
               this.step = 1;
               this.form.get('username').clearValidators();
               this.form.get('code').setValidators([Validators.required]);
               this.form.get('password').setValidators([Validators.required]);
            }
         },
         err => {
            this.toastr.error(err.message);
         });
      }

      if (this.step === 1 && value.code != undefined) {
         this.authService.confirmCode(value.username, value.code, value.password).subscribe(res => {
            if (res.status !== 'success') {
               this.message = res.message;
            } else {
               this.toastr.success('Password has been reseted for user ' + value.username + ', please login.');
               this.router.navigate(['/session/loginone']);
            }
         });
      }
   }
}


