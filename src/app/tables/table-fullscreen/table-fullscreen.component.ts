"use strict";

import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-fullscreen-table',
    templateUrl:'./table-fullscreen-component.html',
    styleUrls: ['./table-fullscreen-component.scss'],
     encapsulation: ViewEncapsulation.None
})
export class FullscreenTableComponent implements OnInit {

  rows = [];

  constructor(private pageTitleService: PageTitleService,
              public translate: TranslateService) {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  ngOnInit() {
    this.translate.get('Full Screen').subscribe((res: string) => {
      this.pageTitleService.setTitle(res);
    });
  }

  /**
    * To fetch the data from JSON file.
    */
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/100k.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
}



