import { Routes } from '@angular/router';

import { FormElementsComponent}  from './form-elements/form-elements.component';
import { FormGroupComponent}  from './form-group/form-group.component';
import { FormValidationComponent}  from './form-validation/formvalidation.component';
import { FormUploadComponent}  from './form-upload/formupload.component';
import { FormTreeComponent}  from './form-tree/formtree.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';
import { UserComponent } from './user/user.component';

export const FormsRoutes: Routes = [{
  path: '',
  redirectTo: 'form-elements',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'form-elements',
    component: FormElementsComponent
  }, {
    path: 'form-group',
    component: FormGroupComponent
  },{
    path: 'form-wizard',
    component: FormWizardComponent
  }, {
    path: 'form-validation',
    component: FormValidationComponent
  }, {
    path: 'form-upload',
    component: FormUploadComponent
  }, {
    path: 'form-tree',
    component: FormTreeComponent
  },
  {
    path: 'user',
    component: UserComponent
  }]
}];
