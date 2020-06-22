import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TreeModule } from 'angular-tree-component';
import { ArchwizardModule } from 'ng2-archwizard';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { FormElementsComponent}  from './form-elements/form-elements.component';
import { FormGroupComponent}  from './form-group/form-group.component';
import { FormValidationComponent}  from './form-validation/formvalidation.component';
import { FormUploadComponent}  from './form-upload/formupload.component';
import { FormTreeComponent}  from './form-tree/formtree.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';

import { FormsRoutes } from './forms.routing';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    NgxDatatableModule,
    TreeModule.forRoot(),
    ArchwizardModule,
    TranslateModule,
    RouterModule.forChild(FormsRoutes)
  ],
  declarations: [ 
    FormElementsComponent,
    FormGroupComponent,
    FormValidationComponent,
    UserComponent,
    FormUploadComponent,
    FormTreeComponent,
    FormWizardComponent
  ]
})

export class FormsDemoModule {}
