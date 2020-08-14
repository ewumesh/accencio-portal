import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  selector: 'ms-perm-ulist',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PermUserListComponent implements OnInit {

  public checked = "";
  users: any[];
  workbooks: Workbook[];
  permissions: Permission[];
  public tabs: boolean[];
  public org = { id: '', name: '' };
  public orgPerm = true;
  public emptyrecord = {};
  public user: any;

  constructor(private route: ActivatedRoute,
    private pageTitleService: PageTitleService,
    public translate: TranslateService,
    private toastr: ToastrService,
    private session: ASession,
    private request: ARequest) {
    this.tabs = [];
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.org.id = params['id'];
      this.org.name = params['name'];
    });
    if (!this.org.id)
      this.org.id = this.session.oid;

    if (!this.org.name)
      this.org.name = this.session.company;

      this.translate.get('User Permission for ' + this.org.name).subscribe((res: string) => {
        this.pageTitleService.setTitle(res);
      });
    this.tabs = [];
    let users = this.request.get('/user/list-o/' + this.org.name);
    let workbooks = this.request.get('/permission/byid2/' + this.org.id);
    if (this.session.role === 'CLIENTADMIN')
      workbooks = this.request.get('/permission/byidname/' + this.org.id + '/' + this.session.username);
    if (this.session.role === 'CLIENTADMIN')
      users = this.request.get('/user/list-o1/' + this.org.name);


    forkJoin([users, workbooks]).subscribe(results => {
      debugger;
      this.users = results[0].Users as Object[];
      this.workbooks = results[1].w as Workbook[];
      //this.permissions = results[2] as Permission[];
      //this.initmap(this.org.id);
    });
  }
  changeUser() {
    const rperm = this.request.get('/permission/byidname/' + this.org.id + '/' + this.user);
    rperm.subscribe(p => {
      this.initmap(p);
    })
    //this.initmap(this.org.id);
  }
  initmap(p) {
    this.tabs = [];
    const orgPermission = p.w;
    this.workbooks.forEach(w => {
      w.shortName = this.shortName(w.name);
      const workbookPermOrg = orgPermission.find(pe => pe.id === w.id);
      console.log(workbookPermOrg);
      this.tabs[w.id] = (workbookPermOrg) ? true : false;
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
    const perm1 = new Permission();
    perm1.id = this.org.id + "_" + this.user;
    perm1.orgid = this.org.id;
    perm1.org = this.org.name;
    perm1.un = this.user;
    perm1.permission = [];

    this.workbooks.forEach(w => {
      perm1.permission.push(
        {
          workbook: w.id,
          enabled: this.tabs[w.id]
        }
      );
    }); //endfor
    //const  s1 = JSON.stringify(perm1);
    //console.log(perm1);

    this.request.post('/permission/add',
      JSON.stringify(perm1)
    ).subscribe(() => {
      this.toastr.success('Permission has been updated.');
    });
  }
}



