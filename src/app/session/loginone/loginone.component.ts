import { Component, OnInit, ViewEncapsulation, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthServices } from '../../service/auth/auth.service';
import { Auth, Hub } from 'aws-amplify';
import { ASession } from 'request/session';
import { ARequest } from 'request/request';

import {
  FacebookLoginProvider,
  AuthService,
  SocialUser, GoogleLoginProvider,
} from 'angularx-social-login';

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
      private authService: AuthServices,
               private socialService: AuthService,
      private spinner: NgxSpinnerService,
      private zone: NgZone,
      public translate: TranslateService) {
         this.spinner.hide();
      Auth.currentAuthenticatedUser()
         .then(() => {
            this.router.navigate(['/home'], { replaceUrl: true });
         }).catch((err) => {
            console.log(err);
         })
   }

   // when email and password is correct, user logged in.
   logIn(value) {
      this.authService.loginUser(value);
   }
   fed1() {
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

  public signInWithGoogle(): void {
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (x: SocialUser) => {
        console.log(x, "GOOGLE DATA")
        this.authService
          .loginWithGoogle({
            userName: x.email,
            firstName: x.firstName,
            lastName: x.lastName ? x.lastName : '  ',
            profileImage: x.photoUrl,
            authProvider: x.provider,
          })
          .subscribe(
            (x) => {
              this.router.navigate(['/']);
            },
            (error) => {}
          );
      }
    );
  }
}
