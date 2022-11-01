import { Component, OnInit, ViewEncapsulation, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthServices } from '../../service/auth/auth.service';
import { Auth, Hub } from 'aws-amplify';
import { ASession } from 'request/session';
import { ARequest } from 'request/request';
@Component({
   selector: 'ms-ip',
   templateUrl: './ip-component.html',
   styleUrls: ['./ip-component.scss'],
   encapsulation: ViewEncapsulation.None,
})

export class InProgressComponent {
   public isProcessing = false;
   constructor(private router: Router,
      private authService: AuthServices,
      private session: ASession,
      private request: ARequest,
      private spinner: NgxSpinnerService,
      private zone: NgZone,
      public translate: TranslateService) {

      Hub.listen("auth", ({ payload: { event, data } }) => {
         if (event === "cognitoHostedUI" || event === "signedIn") {
            this.session.isSSO = (event === "cognitoHostedUI");
            authService.setLocalUserProfile(data);

            Auth.currentAuthenticatedUser().then(au => {
            this.session.isLogged = true;
            this.session.id_token = au.signInUserSession.idToken.getJwtToken();
            this.session.username = au.username;
            this.session.name = au.attributes['given_name'];
            this.session.company = au.attributes['custom:company'];
            if (this.session.isSSO) {
               const role = authService.fed1_mapping.find(el => {
                  const s = el.src;
                  return (au.attributes['custom:g1'] as any[]).includes(s)
               });

               if (role)
                  this.session.role = role.dest;

            } else {

               this.session.role = au.attributes['custom:g1'];

            }

            this.zone.run(() => this.router.navigate(['/home']));
         });

            //this.spinner.hide();

         } else {
            this.isProcessing = true;
         }
      });


      //currentAuthenticatedUser: when user comes to login page again
      Auth.currentAuthenticatedUser()
         .then(() => {
            this.isProcessing = true;
            this.router.navigate(['/home'], { replaceUrl: true });
         }).catch((err) => {
            console.log(err);
            this.spinner.hide();
            this.isProcessing = true;
         })
   }
}
