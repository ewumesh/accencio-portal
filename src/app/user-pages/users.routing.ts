import { Routes } from '@angular/router';

import { UserListComponent } from './user-list/userlist.component';
import { UserTableComponent } from './user-table/usertable.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserContactComponent } from './user-contact/user-contact.component';
import { UserProfileV2Component } from './user-profile-v2/user-profile-v2.component';

export const UsersRoutes: Routes = [{
  path: '',
  redirectTo: 'user-list',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'user-list',
    component: UserListComponent
  }, {
    path: 'user-table',
    component: UserTableComponent
  }, {
    path: 'user-profile',
    component: UserProfileComponent
  },{
    path: 'user-profileV2',
    component: UserProfileV2Component 
  },{
    path: 'user-contact',
    component: UserContactComponent
  }]
}];
