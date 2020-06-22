"use strict";

import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-editing-table',
   templateUrl:'./table-editing-component.html',
   styleUrls: ['./table-editing-component.scss'],
   encapsulation: ViewEncapsulation.None
})

export class EditingTableComponent implements OnInit {

   editing = {};
   rows    = [];

   constructor(private pageTitleService: PageTitleService,
      public translate: TranslateService) {
         this.fetch((data) => {
            this.rows = data;
         });
      }

   ngOnInit() {
      this.translate.get('Editing').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }

   /**
     * To fetch the data from JSON file.
     */
   fetch(cb) {
      const req = new XMLHttpRequest();
      req.open('GET', `assets/data/company.json`);

      req.onload = () => {
         cb(JSON.parse(req.response));
      };

      req.send();
   }

   /**
     * updateValue is used to update the data when edit.
     */
  updateValue(event, cell, rowIndex) {
      this.editing[rowIndex + '-' + cell] = false;
      this.rows[rowIndex][cell] = event.target.value;
      this.rows = [...this.rows];
   }

}



