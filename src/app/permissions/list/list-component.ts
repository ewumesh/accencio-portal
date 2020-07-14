import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ASession } from 'request/session';
import { environment } from 'environments/environment';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';
import { Permission } from 'app/core/types/Permission';
import { Workbook } from 'app/core/types/Workbook';
import { ARequest } from 'request/request';

@Component({
  selector: 'ms-perm-list',
  templateUrl: './list-component.html',
  styleUrls: ['./list-component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PermListComponent implements OnInit {

  public checked = "";
  records: any[];
  workbooks: Workbook[];
  permissions: Permission[];
  public tabs: boolean[][];
  constructor(private pageTitleService: PageTitleService,
    public translate: TranslateService,
    private toastr: ToastrService,
    private request: ARequest) {
    this.tabs = [];
    this.tabs[0] = [false];
  }

  ngOnInit() {

    this.translate.get('Permission').subscribe((res: string) => {
      this.pageTitleService.setTitle(res);
    });

    const orgs = this.request.get('/org/all');
    const workbooks = this.request.get('/wb/all');
    const permissions = this.request.get('/permission/all');

    forkJoin([orgs, workbooks, permissions]).subscribe(results => {
      this.records = results[0] as Object[];
      this.workbooks = results[1] as Workbook[];
      this.permissions = results[2] as Permission[];
      this.initmap();
    });
  }
  initmap() {
    this.records.forEach(org => {
      this.tabs[org.id] = [];
      const orgPermission = this.permissions.find(el => el.orgid === org.id);
      this.workbooks.forEach(w => {
        w.shortName = this.shortName(w.name);
        const workbookPermsOrg = JSON.parse(orgPermission.permission.toString());
        const workbookPermOrg = workbookPermsOrg.find(pe => pe.workbook === w.id);
        this.tabs[org.id][w.id] = (workbookPermOrg && workbookPermOrg.enabled) ? true : false;
      });
    });
  }

  shortName(name) {
    const index = name.indexOf('/');
    console.log(index);
    if (index > 0)
      return name.substring(0, index);
    return name;
  }
  apply() {
    let orgid = 0;
    this.records.forEach(org => {
      const perm1 = new Permission();
      perm1.id = org.id;
      perm1.orgid = org.id;
      perm1.org = org.name;
      perm1.permission = [];

      this.workbooks.forEach(w => {
        perm1.permission.push(
          {
            workbook: w.id,
            enabled: this.tabs[org.id][w.id]
          }
        );
      }); //endfor
      //const  s1 = JSON.stringify(perm1);
      //console.log(perm1);

      this.request.post('/permission/add',
        JSON.stringify(perm1)
      ).subscribe(users => {
        if (orgid == 0)
          this.toastr.success('Permission has been updated.');
        orgid++;
      });
    });
  }
}



