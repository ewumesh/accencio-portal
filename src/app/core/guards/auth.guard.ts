import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { ASession } from 'request/session';

@Injectable({
   providedIn: 'root'
})

export class AuthGuard implements CanActivate {

	constructor(private router: Router, private session: ASession, private userAuthService: AuthService) { }
	
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (state.url.indexOf('/session/loginone/') !== -1) {
         this.userAuthService.ilogOut();
         return true;
      }
      if (!this.userAuthService.isLoggedIn) {
         const auth1 = this.userAuthService.getLocalStorageUser();
         if (!auth1) {
            this.userAuthService.ilogOut();
            this.router.navigate(['/session/loginone'], { queryParams: { returnUrl: state.url }});
            return false;
         }
         //refresh token
         this.session.isLogged = true;
         this.session.id_token = this.userAuthService.userData['id_token'];
         this.session.username = this.userAuthService.userData['username'];
         this.session.name = this.userAuthService.userData['name'];
         this.session.role = this.userAuthService.userData['role'];
         this.session.company = this.userAuthService.userData['company'];
      }
      
      let url = state.url;
      const ii = url.lastIndexOf('/edit/');
      if (ii !== -1) {
         url = url.substring(0, ii) + '/edit';
      }
      

      if (['/org/list', '/workbooks/list', '/workbooks/add', '/org/add', '/workbooks/edit', '/org/edit'].includes(url)) {
         if (this.session.role !== 'ACCENCIOADMIN') {
            this.router.navigate(['/session/not-found'], { queryParams: { returnUrl: state.url }});
            return false;
         }
      }

      if (['/perm/list', '/org/list', '/workbooks/list', '/workbooks/add', '/org/add', '/workbooks/edit', '/org/edit'].includes(url)) {
         if (this.session.role !== 'ACCENCIOADMIN') {
            this.router.navigate(['/session/not-found'], { queryParams: { returnUrl: state.url }});
            return false;
         }
      }

      if (['/perm/up'].includes(url)) {
         if (this.session.role !== 'CLIENTADMIN') {
            this.router.navigate(['/session/not-found'], { queryParams: { returnUrl: state.url }});
            return false;
         }
      }

      if (state.url.indexOf('/perm/ulist/') !== -1) {
         if (this.session.role !== 'ACCENCIOADMIN') {
            this.router.navigate(['/session/not-found'], { queryParams: { returnUrl: state.url }});
            return false;
         }
      }

      if (state.url.indexOf('/user/') !== -1) {
         if (this.session.role === 'USER') {
            this.router.navigate(['/session/not-found'], { queryParams: { returnUrl: state.url }});
            return false;
         }
      }

      //if (this.userAuthService.getLocalStorageUser()) {
      //   return true;
     // }

      // not logged in so redirect to login page with the return url
      
      return true;
   }
}