import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Auth, Hub } from 'aws-amplify';
import { ASession } from 'request/session';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { keyValuesToMap } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { ARequest } from 'request/request';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable({
   providedIn: 'root'
})
export class AuthService {

   userData: any;
   isLoggedIn = false;

   public fed1_mapping = [{
      src: "27bdb1cb-dd0e-40d0-80ba-62fe76226851",
      dest: "USER"
   }, {
      src: "b6ac1289-7913-465b-b23e-b982110e26e6",
      dest: "CLIENTADMIN"
   }
   ]

   constructor(private router: Router,
      private http: HttpClient,
      private request: ARequest,
      private session: ASession,
      private spinner: NgxSpinnerService,
      private toastr: ToastrService) {
   }

   /*
    *  getLocalStorageUser function is used to get local user profile data.
    */
   getLocalStorageUser() {
      this.userData = JSON.parse(localStorage.getItem("userProfile"));
      if (this.userData) {
         this.isLoggedIn = true;
         return true;
      } else {
         this.isLoggedIn = false;
         return false;
      }
   }

   /*
* signupUserProfile method save email and password into firabse &
* signupUserProfile method save the user sign in data into local storage.
*/
   /* signupUserProfile(value) {
       const authInfo = {
          username: value.account,
          password: value.password
       };
 
       Auth.signIn(authInfo).then(user => {
          this.setLocalUserProfile(value);
          this.router.navigate(['/']);
       })
          .catch(err => this.toastr.error(err.message));
    }
 */
   /*
    * loginUser fuction used to login.
    */
   loginUser(value) {
      const authInfo = {
         username: value.fname,
         password: value.password
      };
      Auth.signIn(authInfo).then(user => {
         Auth.currentAuthenticatedUser().then(au => {
            this.session.isLogged = true;
            this.session.id_token = au.signInUserSession.idToken.getJwtToken();
            this.session.username = au.username;
            this.session.oid = au.attributes['custom:oid'];
            this.session.name = au.attributes['given_name'];
            this.session.company = au.attributes['custom:company'];
            this.session.role = au.attributes['custom:g1'];
            this.session.email = au.attributes['email'];
            this.setLocalUserProfile(this.session);
            this.loginzc(this.session.username, this.session.email);
            //this.toastr.success('You have been successfully logged In');
            this.router.navigate(['/home']);
         });
      })
         .catch(err => {
            this.toastr.error(err.message);
            this.spinner.hide();
         });
   }
   logoutzc() {
      zE(function () {
         //zE('webWidget', 'clear');
         zE.logout();
      });
   }
   loginzc(un, email) {
      zE(function () {
         zE.identify({
            name: un,
            email: email
         });
         return;
         $zopim(function () {
            debugger;

            //$zopim.setName(un);
            //$zopim.setEmail(email);
            return;
            // $zopim.livechat.clearAll();
            $zopim.livechat.authenticate({
               jwtFn: function (callback) {
                  fetch('https://hmdz1lq98a.execute-api.us-east-1.amazonaws.com/Prod/auth/zenc',
                     {
                        method: 'post',
                        body: JSON.stringify({ username: un, email: email })
                     }).then(function (res) {
                        res.text().then(function (jwt) {
                           debugger;
                           callback(jwt);
                        });
                     });
               }
            });
         });
      });
   }
   fed1() {
      Auth.federatedSignIn({
         customProvider: 'acc1'
      }).then(fuser => {

      }

      ).catch(x =>
         console.log(x))
   }
   /*
    * resetPassword is used to reset your password.
    */
   resetPassword(value): Observable<any> {
      return this.request.post('/user/forgot-password',
         {
            username: value
         });
   }

   confirmCode(username, code, password): Observable<any> {
      return this.request.post('/user/confirm-code',
         {
            username: username,
            code: code,
            password: password
         });
   }

   /*
    * logOut function is used to sign out .
    */
   async logOut() {
      this.spinner.show();

      localStorage.removeItem("userProfile");
      this.isLoggedIn = false;
      this.toastr.success("You have been successfully logged out.");
      this.spinner.hide();
      this.logoutzc();
      await Auth.signOut();
      window.location.href = '/session/loginone'

   }

   async ilogOut() {
      //this.logoutzc();
      await Auth.signOut();
      localStorage.removeItem("userProfile");
      this.isLoggedIn = false;
      window.document.location.href = '/session/loginone';
   }

   /*
    * setLocalUserProfile function is used to set local user profile data.
    */
   public setLocalUserProfile(value) {
      localStorage.setItem("userProfile", JSON.stringify(value));
      this.isLoggedIn = true;
   }

   public async getUserInfo2() {
      var au = await Auth.currentAuthenticatedUser();
      if (!au)
         return;
      debugger;
      this.session.isLogged = true;
      this.session.id_token = au.signInUserSession.idToken.getJwtToken();
      this.session.username = au.username;
      this.session.oid = au.attributes['custom:oid'];
      this.session.name = au.attributes['given_name'];
      this.session.company = au.attributes['custom:company'];
      this.session.email = au.attributes['email'];
      if (this.session.isSSO) {
         const role = this.fed1_mapping.find(el => {
            const s = el.src;
            return (au.attributes['custom:g1'] as any[]).includes(s)
         });

         if (role)
            this.session.role = role.dest;

      } else {

         this.session.role = au.attributes['custom:g1'];

      }
     
      const rgeto = this.request.get('/org/byid/' + this.session.oid);
      rgeto.subscribe(org => {
         this.session.company = org.name;
         this.loginzc(this.session.username, this.session.email);
      });
     

   }
   public async getOrg() {
      if (this.session.oid)
         return;
      var au = await Auth.currentAuthenticatedUser();
      if (!au)
         return;
      const rperm2 = this.request.get('/org/byname/' + this.session.company);
      rperm2.subscribe(orgs => {
      });
      const rperm = this.request.get('/org/all/');
      rperm.subscribe(orgs => {
         const org = (orgs as any[]).find(e => e.name === this.session.company);
         this.session.oid = org.id;
      })
   }
}
