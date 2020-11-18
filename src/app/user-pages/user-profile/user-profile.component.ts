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
import { Auth } from 'aws-amplify';
import { ARequest } from 'request/request';

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'ms-organization-addedit',
  templateUrl: './user-profile-component.html',
  styleUrls: ['./user-profile-component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent implements OnInit {

  public form: FormGroup;
  public config: AngularEditorConfig;
  public title = "Add new";
  public description: string;
  public isPortalTour = false;
  public id: string;
  companies: any;
  roles: any;
  fieldTextType: boolean = false;
  submitted = false;
  public myGroup: FormGroup;
  constructor(private fb: FormBuilder,
    private pageTitleService: PageTitleService,
    public translate: TranslateService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private request: ARequest,
    private session: ASession) { }

  ngOnInit() {
    this.translate.get('User').subscribe((res: string) => {
      this.pageTitleService.setTitle(res);
    });

    this.myGroup = new FormGroup({
      cupt: new FormControl()
   });
    this.form = this.fb.group({
      account: ['', [Validators.required]],
      email: ['', [Validators.required]],
      fullname: ['', [Validators.required]],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      role: ['', [Validators.required]],
      company: ['', [Validators.required]]
    });
    this.id = this.session.username;
    this.title = "User Profile";
    this.request.get('/user/get/' + this.session.username).subscribe(users => {
      const user = users.Users.find(el => el.Username === this.id);
      this.form.setValue({
        password: null,
        fullname: user.Attributes.find(el => el.Name == "given_name").Value,
        company: user.Attributes.find(el => el.Name == "custom:company").Value,
        account: user.Username,
        email: user.Attributes.find(el => el.Name == "email").Value,
        role: user.Attributes.find(el => el.Name == "custom:g1").Value,
      });
    });

    this.myGroup.controls['cupt'].setValue(this.session.isTourEnabled);

    if (this.session.role === 'ACCENCIOADMIN') {
      this.request.get('/org/all').subscribe(
        result => {
          this.companies = result;
        }
      );
      this.roles = [
        { name: 'ACCENCIOADMIN' },
        { name: 'CLIENTADMIN' },
        { name: 'USER' }
      ]
    } if (this.session.role === 'CLIENTADMIN') {
      this.companies = [{ name: this.session.company }];
      this.roles = [
        { name: 'CLIENTADMIN' },
        { name: 'USER' }
      ]
    } if (this.session.role === 'USER') {
      this.companies = [{ name: this.session.company }];
      this.roles = [
        { name: 'USER' }
      ]
    }
  }

  changeSettings() {
    this.session.isTourEnabled = !this.session.isTourEnabled;
    this.myGroup.controls['cupt'].setValue(this.session.isTourEnabled);
    this.toastr.success('User Portal tour has been ' + (this.session.isTourEnabled ? 'enabled' : 'disabled'));
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  onSubmit() {
    this.edit();
  }
  edit() {
    if (this.form.controls['password'].hasError('minlength'))
      return;
    //if (!this.form.valid)
    //  return;
    var params = {
      username: this.form.value.account,
      givenname: this.form.value.fullname,
      company: this.form.value.company,
      role: this.form.value.role,
      email: this.form.value.email
    };
    if (this.form.value.password)
      params['password'] = this.form.value.password;
    this.request.post('/user/update',
      (params)
    ).subscribe(res => {
      this.toastr.success('User has been updated.');
    },
      err => {
        this.form.setErrors({ code: err.message });
      }
    );

  }
}