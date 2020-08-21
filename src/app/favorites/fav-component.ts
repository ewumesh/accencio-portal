import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { ASession } from 'request/session';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ARequest } from 'request/request';
import { PageTitleService } from 'app/core/page-title/page-title.service';


@Component({
  selector: 'ms-fav-addedit',
  templateUrl: './fav-component.html',
  styleUrls: ['./fav-component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddComponent implements OnInit {

  public form: FormGroup;
  public config: AngularEditorConfig;
  public title = "Configure favorites";
  public description: string;
  public id: string;
  public workbookId: string;
  public workbookName: string;
  public workbook: string;
  dropdownSettings: IDropdownSettings;
  dropdownList = [];
  selectedItems = [];
  workbooks: any[];
  constructor(private fb: FormBuilder,
    private pageTitleService: PageTitleService,
    public translate: TranslateService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private request: ARequest,
    private session: ASession) { }

  ngOnInit() {

    const allpermService = this.request.get('/permission/byidname/' + this.session.oid);
    allpermService.subscribe(res => {
      this.dropdownList = res.w as Object[];
    });

    this.translate.get('Favorites').subscribe((res: string) => {
      this.pageTitleService.setTitle(res);
    });

    this.form = this.fb.group({
      id: [null]
    });

    this.selectedItems = [];

    this.request.get('/library/byid/' + "fav" + this.session.username).subscribe(
      res => {
        if (res) {
          this.id = "fav" + this.session.username;
          this.workbookId = res['workbook'];
          this.form.patchValue({ id: res['id'] });
          this.form.patchValue({ name: res['name'] });
          this.form.patchValue({ description: res['description'] });
          this.selectedItems = res['list'];
        }
      }
    );


    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 100,
      allowSearchFilter: true
    }
  }

  onSelectAll(items: any) {
  }

  onSubmit() {
    if (!this.id)
      this.add();
    else
      this.edit();
  }
  add() {
    this.request.post('/library/add',
      {
        id: "fav" + this.session.username,
        name: this.form.value.name,
        description: this.form.value.description,
        date: new Date(),
        list: this.selectedItems,
        username: this.session.username
      }).subscribe(res => {
        this.id = "fav" + this.session.username;
        this.toastr.success('My Favorites has been added.');
      });
  }
  edit() {
    this.request.post('/library/add',
      {
        id: this.form.value.id,
        name: this.form.value.name,
        description: this.form.value.description,
        date: new Date(),
        list: this.selectedItems,
        username: this.session.username
      }).subscribe(res => {
        this.toastr.success('Favorites has been updated.');
      });
  }
}



