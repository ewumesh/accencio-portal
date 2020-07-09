import { Component, OnInit,ViewEncapsulation } from '@angular/core';
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

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'ms-workbook-addedit',
  templateUrl:'./add-component.html',
  styleUrls: ['./add-component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddComponent implements OnInit {

  public form : FormGroup;
  public config: AngularEditorConfig;
  public title = "Add new library";
  public description: string;
  private id: string;
  public workbookId: string;
  public workbookName: string;
  dropdownSettings:IDropdownSettings;
  dropdownList = [];
  selectedItems = [];
  workbooks: any[];
  workbooksArray = [];
  //dropdownSettings = {};
  constructor(private fb: FormBuilder,
              private pageTitleService: PageTitleService,
              public translate: TranslateService,
              private router: Router,
              private toastr: ToastrService,
              private route: ActivatedRoute,
              private http: HttpClient,
              private session: ASession) {}

  ngOnInit() {

    this.http.get(environment.API_GATEWAY + '/wb/all').subscribe(users => {
      this.dropdownList = users as Object[];
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
    this.translate.get('Libraries').subscribe((res: string) => {
      this.pageTitleService.setTitle(res);
    });

    this.form = this.fb.group({
      name: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
      date:[null],
      id:[null]
    });

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.selectedItems = [];

    if (this.id) {
      this.title = "Edit " + this.id;
      this.http.get(environment.API_GATEWAY + '/library/byid/' + this.id).subscribe(
        res => {
          //console.log(this.id + " " + res);
          //this.form.controls['name'].setValue(res['name']);
          //this.form.controls['description'].setValue(res['description']);
          this.workbookId = res['workbook'];
          //this.form.value.id = res['id'];
          //console.log("WB from library: " + res['workbook'] + "In var: " + this.workbookId);
          //this.form.setValue(res);
          this.form.patchValue({id: res['id']});
          this.form.patchValue({name: res['name']});
          this.form.patchValue({description: res['description']});

          //console.log(res);

          this.http.get(environment.API_GATEWAY + '/wb/byid/' + this.workbookId).subscribe(
            res2 => {
              //console.log(res2);
              this.workbookName = res2['name'];

              this.selectedItems = [
                {
                  id: this.workbookId, name: this.workbookName
                }
              ];
            }
          );
        }
      );

      //console.log("Link: " + environment.API_GATEWAY + '/wb/byid/' + this.workbookId);

      console.log("ID: " + this.workbookId + " Name: " + this.workbookName);
    }



    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    }
  }

  onItemSelect(item: any) {
    console.log("Added one: ");
    //console.log(item.name);
    this.workbooksArray.push(item.id);
    console.log(this.workbooksArray);
  }

  onItemDeSelect(item: any) {
    console.log("Removed one: ");
    //console.log(item.name);
    //this.workbooksArray.push(item.name);

    const index: number = this.workbooksArray.indexOf(item.id);
    this.workbooksArray.splice(index, 1);

    console.log(this.workbooksArray);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  onSubmit() {
    //console.log(this.form.value.id);
    if (!this.id)
      this.add();
    else
      this.edit();
  }
  add() {
    this.selectedItems.forEach(function(item) {
      //alert("Test: " + item.name);
    });

    this.http.post(environment.API_GATEWAY + '/library/add',
      {
        id:  '_' + Math.random().toString(36).substr(2, 9),
        name: this.form.value.name,
        description: this.form.value.description,
        date: new Date(),
        workbook: this.workbooksArray[0]
      }).subscribe(res=> {
      this.toastr.success('Library has been added.');
      this.router.navigate(['/libraries/management-list'])
    });

  }

  edit() {
    this.http.post(environment.API_GATEWAY + '/library/add',
      {
        id: this.form.value.id,
        name: this.form.value.name,
        description: this.form.value.description,
        date: new Date(),
        workbook: this.selectedItems[0].id
      }).subscribe(res=> {
      this.toastr.success('Library has been updated.');
      this.router.navigate(['/libraries/management-list'])
    });
  }
}



