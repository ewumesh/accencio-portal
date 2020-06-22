"use strict";

import { Component, ViewChild, OnInit ,ViewEncapsulation} from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-paging-table',
    templateUrl:'./table-paging-component.html',
    styleUrls: ['./table-paging-component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PagingTableComponent implements OnInit {

  rows = [];

  constructor(private pageTitleService: PageTitleService,
              public translate: TranslateService) {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  ngOnInit() {
    this.translate.get('Paging').subscribe((res: string) => {
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
}



