"use strict";

import { Component, ViewChild, OnInit ,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-sorting-table',
    templateUrl:'./table-sorting-component.html',
    styleUrls: ['./table-sorting-component.scss'],
    encapsulation: ViewEncapsulation.None

})
export class SortingTableComponent implements OnInit {

  rows = [];

  columns = [
    { name: 'Company' },
    { name: 'Name' },
    { name: 'Gender' }
  ];

  constructor(private pageTitleService: PageTitleService,
              public translate: TranslateService) {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  ngOnInit() {
    this.translate.get('Sorting').subscribe((res: string) => {
      this.pageTitleService.setTitle(res);
    });
  }

  /**
    * to fetch the data from company.json file.
    */
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };

    req.send();
  }
}



