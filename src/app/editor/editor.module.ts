import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { QuillModule } from 'ngx-quill';
import { CKEditorModule } from 'ng2-ckeditor';
import { AceEditorModule } from 'ng2-ace-editor';

import { AceEditorDemoComponent}  from './ace-editor/ace-editor.component';
import { SummerEditorComponent}  from './summer-editor/summer-editor.component';
import { EditorComponent}  from './wysiwyg-editor/editor.component';
import { Ckeditor } from './ckeditor/ckeditor.component';
import { EditorRoutes } from './editor.routing';

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      QuillModule,
      CKEditorModule,
      AceEditorModule,
      TranslateModule,
      RouterModule.forChild(EditorRoutes)
   ],
   declarations: [ 
      AceEditorDemoComponent,
      SummerEditorComponent,
      EditorComponent,
      Ckeditor,
   ]
})

export class EditorModule {}
