"use strict";

import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-selection-table',
    templateUrl:'./table-selection-component.html',
    styleUrls: ['./table-selection-component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SelectionTableComponent implements OnInit {

  rows: any[] = [];
  selected: any[] = [];
  columns: any[] = [
    { prop: 'name'} , 
    { name: 'Company' }, 
    { name: 'Gender' }
  ];

  constructor(private pageTitleService: PageTitleService,
              public translate: TranslateService) {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  ngOnInit() {
    this.translate.get('Selection').subscribe((res: string) => {
      this.pageTitleService.setTitle(res);
    });
  }

  /**
    * To fetch the data from company.json file.
    */
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
}



