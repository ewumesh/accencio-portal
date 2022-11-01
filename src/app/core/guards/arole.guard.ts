import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { AuthServices } from '../../service/auth/auth.service';

@Injectable({
   providedIn: 'root'
})

export class ARoleGuard implements CanActivate {

	constructor(private router: Router, private userAuthServices: AuthServices) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.userAuthServices.getLocalStorageUser()) {
         return true;
      }

      // not logged in so redirect to login page with the return url
      this.router.navigate(['/session/loginone'], { queryParams: { returnUrl: state.url }});
      return false;
   }
}
