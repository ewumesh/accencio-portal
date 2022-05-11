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
import { CoreService } from 'app/service/core/core-service.service';

@Component({
  selector: 'ms-workbook-list',
  templateUrl:'./list-component.html',
  styleUrls: ['./list-component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ListComponent implements OnInit {

  workbooks: any[];
  constructor(private pageTitleService: PageTitleService,
              public coreService: CoreService,
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

      $(document).on('click', '.dele', ($event) => {
        debugger;
        let id1 = $event.currentTarget.getAttribute("id2");
        let id2 = $event.currentTarget.getAttribute("dataid");
        this.onDelete(id2,id1);
        //this.deleteCustCat(customerId);
    });
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



