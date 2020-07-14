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
  selector: 'ms-organization-list',
  templateUrl:'./list-component.html',
  styleUrls: ['./list-component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ListOrgComponent implements OnInit {

  records: any[];
  constructor(private pageTitleService: PageTitleService,
              public translate: TranslateService,
              private router: Router,
              private toastr: ToastrService,
              private sanitizer: DomSanitizer,
              private request: ARequest,
              private session: ASession) {}

  ngOnInit() {
    this.translate.get('Organizations').subscribe((res: string) => {
      this.pageTitleService.setTitle(res);
    });

    this.request.get('/org/all').subscribe(orgs => {
      this.records = orgs as Object[];
    });
  }
  onDelete(id, index) {
    this.request.delete('/org/delete/' + id).subscribe(users => {
      this.toastr.success('Organization has been deleted.');
      this.records.splice(index, 1);
    });
  }
  addnew() {
    this.router.navigate(['/org/add']);
  }
}



