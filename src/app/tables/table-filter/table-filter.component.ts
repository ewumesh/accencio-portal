"use strict";

import { Component, ViewChild, OnInit ,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ms-filter-table',
  templateUrl:'./table-filter-component.html',
  styleUrls: ['./table-filter-component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FilterTableComponent implements OnInit {

  rows = [];
  temp = [];
  columns = [
    { prop: 'name' },
    { name: 'Company' },
    { name: 'Gender' }
  ];

  constructor(private pageTitleService: PageTitleService,
              public translate: TranslateService) {
    this.fetch((data) => {
      // cache our list
      this.temp = [...data];

      // push our inital complete list
      this.rows = data;
    });
  }

  ngOnInit() {
    this.translate.get('Filter').subscribe((res: string) => {
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
    * updateFilter method is used to filter the data.
    */
  updateFilter(event) {
    const val = event.target.value;

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
  }
}



