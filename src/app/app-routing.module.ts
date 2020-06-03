import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthenticationComponent } from './auth/user-authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { UnauthGuard } from './auth/unauth';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { UserComponent } from './auth/user-setting/user.component';


const routes: Routes = [
  { path: '', component: HomeComponent,  canActivate: [UnauthGuard]},
  { path: 'signin', component: SigninComponent,  canActivate: [UnauthGuard]},
  { path: 'signup', component: SignupComponent,  canActivate: [UnauthGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
