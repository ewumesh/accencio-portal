import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { AceEditorComponent } from 'ng2-ace-editor'; 
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ms-ace-editor',
  templateUrl: './ace-editor.html',
  styleUrls: ['./ace-editor.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AceEditorDemoComponent implements OnInit {

  constructor(private pageTitleService: PageTitleService,
              public translate: TranslateService) {}

   ngOnInit() {
      this.translate.get('Ace Editor').subscribe((res: string) => {
        this.pageTitleService.setTitle(res);
      });
   }  

   @ViewChild('editor', {static: false}) editor;
   text: string = "<style>.button{font-size: 12px; color: #ff0;}</style>";

   ngAfterViewInit() {
      this.editor.setTheme("monokai");

      this.editor.getEditor().setOptions({
         enableBasicAutocompletion: true
      });

      this.editor.getEditor().commands.addCommand({
         name: "showOtherCompletions",
         bindKey: "Ctrl-.",
         exec: function (editor) { }
      })
   }
}
