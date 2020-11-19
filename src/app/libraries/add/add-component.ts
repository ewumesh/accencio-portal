import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { ASession } from 'request/session';
import { environment } from 'environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ARequest } from 'request/request';
import { Observable } from 'rxjs/Rx';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'ms-workbook-addedit',
  templateUrl: './add-component.html',
  styleUrls: ['./add-component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddComponent implements OnInit {

  public form: FormGroup;
  public config: AngularEditorConfig;
  public title = "Add New AccencioView";
  public description: string;
  private id: string;
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

    let allpermService = this.request.get('/permission/byid2/' + this.session.oid);
    if (this.session.role === 'CLIENTADMIN')
      allpermService = this.request.get('/permission/byidname/' + this.session.oid);

    allpermService.subscribe(res => {
      this.dropdownList = res.w as Object[];
    });
    this.config = {
      editable: true,
      spellcheck: true,
      height: '15rem',
      minHeight: '5rem',
      placeholder: 'Enter text here...',
      translate: 'no',
      customClasses: [
        {
          name: "quote",
          class: "quote",
        },
        {
          name: 'redText',
          class: 'redText'
        },
        {
          name: "titleText",
          class: "titleText",
          tag: "h1",
        },
      ]
    };
    
    
    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
      date: [null],
      id: [null],
      imagemodel: [null]
    });

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.selectedItems = [];
    this.pageTitleService.setTitle('AccencioView -> Add new');
    if (this.id) {
      this.pageTitleService.setTitle('AccencioView -> Edit');
      this.title = "Edit " + this.id;
      this.request.get('/library/byid/' + this.id).subscribe(
        res => {
          this.workbookId = res['workbook'];
          this.form.patchValue({ id: res['id'] });
          this.form.patchValue({ name: res['name'] });
          this.form.patchValue({ description: res['description'] });
          this.selectedItems = res['list'];
          this.form.patchValue({ imagemodel: res['imagemodel'] });
        }
      );
    }

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
    const id = '_' + Math.random().toString(36).substr(2, 9); 
    this.request.post('/library/add',
      {
        id: id,
        name: this.form.value.name,
        description: this.form.value.description,
        date: new Date(),
        org: this.session.company,
        list: this.selectedItems,
        imagemodel: this.form.value.imagemodel
      }).subscribe(res => {
        this.toastr.success('View has been added.');
        this.logmessage(id, 'View ' + this.form.value.name + ' has been added.').subscribe(
          el =>  { this.router.navigate(['/libraries/list']) } );
      });
  }
  edit() {
    this.request.post('/library/add',
      {
        id: this.form.value.id,
        name: this.form.value.name,
        description: this.form.value.description,
        date: new Date(),
        org: this.session.company,
        list: this.selectedItems,
        imagemodel: this.form.value.imagemodel
      }).subscribe(res => {
        this.toastr.success('AccencioView has been updated.');
        this.logmessage(this.form.value.id, 'AccencioView ' + this.form.value.name + ' has been updated.' ).subscribe(
          el =>  { this.router.navigate(['/libraries/list']) } );
      });
  }
  logmessage(refId, msg): Observable<any> {
		return this.request.post('/message/add', {
			id:  '_' + Math.random().toString(36).substr(2, 9),
			org: this.session.company,
			orgid: this.session.oid,
			type: 'n',
			wb: refId,
			date: new Date(),
			from1:'',
			to: '',
			status: 2,
			msg: msg
		  });
	}
}



