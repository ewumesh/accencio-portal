import { Component, OnInit, ViewEncapsulation, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../../service/auth/auth.service';
import { Auth, Hub } from 'aws-amplify';
import { ASession } from 'request/session';
import { ARequest } from 'request/request';
@Component({
   selector: 'ms-loginone-session',
   templateUrl: './loginone-component.html',
   styleUrls: ['./loginone-component.scss'],
   encapsulation: ViewEncapsulation.None,
})

export class LoginoneComponent {
   fieldTextType: boolean = false;
   email: string = "";
   password: string = "";
   name: string;
   constructor(private router: Router,
      private authService: AuthService,
      private spinner: NgxSpinnerService,
      private zone: NgZone,
      public translate: TranslateService) {

      Auth.currentAuthenticatedUser()
         .then(() => {
            this.router.navigate(['/home'], { replaceUrl: true });
         }).catch((err) => {
            console.log(err);
            this.spinner.hide();
         })
   }

   // when email and password is correct, user logged in.
   logIn(value) {
      this.spinner.show();
      this.authService.loginUser(value);
   }
   fed1() {
      this.spinner.show();
      Auth.federatedSignIn({
         customProvider: 'acc1'
      }).then(fuser => {
      }

      ).catch(x =>
         console.log(x))
   }
   toggleFieldTextType() {
      this.fieldTextType = !this.fieldTextType;
   }
}