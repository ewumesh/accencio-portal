import { Routes } from '@angular/router';

import { LoginoneComponent } from './loginone/loginone.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { LockScreenComponent } from './lockscreen/lockscreen.component';
import { SubscribesComponent } from './subscribes/subscribes.component';
import { UnderMaintanceComponent } from './under-maintance/under-maintance.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ComingsoonV2Component } from './coming-soonV2/coming-soonV2.component';
import { MaintenanceV2Component } from './maintenanceV2/maintenanceV2.component';

export const SessionRoutes: Routes = [{
  path: '',
  redirectTo: 'loginone',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'loginone',
    component: LoginoneComponent
  }, {
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  }, {
    path: 'coming-soon',
    component: ComingSoonComponent
  },{
    path: 'coming-soonV2',
    component: ComingsoonV2Component
  }, {
    path: 'lockscreen',
    component: LockScreenComponent
  }, {
    path: 'not-found',
    component: NotFoundComponent
  }, {
    path: 'subscribes',
    component: SubscribesComponent
  }, {
    path: 'undermaintance',
    component: UnderMaintanceComponent
  }, {
    path: 'maintanceV2',
    component: MaintenanceV2Component
  }]
}];
