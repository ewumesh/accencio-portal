import { Routes } from '@angular/router';

import { AceEditorDemoComponent}  from './ace-editor/ace-editor.component';
import { SummerEditorComponent}  from './summer-editor/summer-editor.component';
import { EditorComponent}  from './wysiwyg-editor/editor.component';
import { Ckeditor } from './ckeditor/ckeditor.component';

export const EditorRoutes: Routes = [{
  path: '',
  redirectTo: 'ace-editor',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'ace-editor',
    component: AceEditorDemoComponent
  }, {
    path: 'summer-editor',
    component: SummerEditorComponent
  }, {
    path: 'wysiwyg',
    component: EditorComponent
  }, {
    path: 'ckeditor',
    component: Ckeditor
  }]
}];
