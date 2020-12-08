import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ASession } from 'request/session';
import { environment } from 'environments/environment';
import { ToastrService } from 'ngx-toastr';
import { ARequest } from 'request/request';

@Component({
  selector: 'ms-workbook-list',
  templateUrl:'./list-component.html',
  styleUrls: ['./list-component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ListComponent implements OnInit {

  workbooks: any[];
  constructor(private pageTitleService: PageTitleService,
              public translate: TranslateService,
              private router: Router,
              private toastr: ToastrService,
              private request: ARequest) {}

  ngOnInit() {
    this.translate.get('Workbooks').subscribe((res: string) => {
      this.pageTitleService.setTitle(res);
    });

    this.request.get('/wb/all').subscribe(wbs => {
      this.workbooks = wbs as Object[];
      $('.table').footable();
    });
  }
  onDelete(id, index) {
    this.request.delete('/wb/delete/' + id).subscribe(wb => {
      this.toastr.success('Workbook has been deleted.');
      this.workbooks.splice(index, 1);
    }); 
  }
  addnew() {
    this.router.navigate(['/workbooks/add']);
  }
}



