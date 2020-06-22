import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { UserListComponent } from './user-list/userlist.component';
import { UserTableComponent } from './user-table/usertable.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserContactComponent } from './user-contact/user-contact.component';
import { UsersRoutes } from './users.routing';
import { UserProfileV2Component } from './user-profile-v2/user-profile-v2.component';
import { UserProfileCardComponent } from './user-profile-v2-widgets/user-profile-card/user-profile-card.component';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(UsersRoutes),
      TranslateModule
   ],
   declarations: [ 
      UserListComponent,
      UserTableComponent,
      UserProfileComponent,
      UserContactComponent,
      UserProfileV2Component,
      UserProfileCardComponent
   ]
})

export class UsersDemoModule {}
