import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';
import { ASession } from 'request/session';
import { ARequest } from 'request/request';

@Component({
    selector: 'ms-user-profile',
    templateUrl:'./user-profile-component.html',
    styleUrls: ['./user-profile-component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent implements OnInit {

  users: Object[] = [{
      name: 'Adam',
      city: 'California',
      country: 'USA',
      post:'Senior Developer, Company Inc.',
      image:'assets/img/user-1.jpg'
    },{
      name: 'Thomas',
      city: 'Punjab',
      country: 'India',
      post:'Software Engineer, Company Inc.',
      image:'assets/img/user-2.jpg'
    },{
      name: 'Gilcharist',
      city: 'California',
      country: 'USA',
      post:'Senior Developer, Company Inc.',
      image:'assets/img/user-3.jpg'
    },{
      name: 'John',
      city: 'Punjab',
      country: 'India',
      post:'Software Engineer, Company Inc.',
      image:'assets/img/user-4.jpg'
    },{
      name: 'Smith',
      city: 'California',
      country: 'USA',
      post:'Senior Developer, Company Inc.',
      image:'assets/img/user-1.jpg'
    },{
      name: 'Peter',
      city: 'Punjab',
      country: 'India',
      post:'Software Engineer, Company Inc.',
      image:'assets/img/user-2.jpg'
    },{
      name: 'Kley',
      city: 'California',
      country: 'USA',
      post:'Senior Developer, Company Inc.',
      image:'assets/img/user-3.jpg'
    },{
      name: 'Adam',
      city: 'Punjab',
      country: 'India',
      post:'Software Engineer, Company Inc.',
      image:'assets/img/user-4.jpg'
    },{
      name: 'Orton',
      city: 'California',
      country: 'USA',
      post:'Senior Developer, Company Inc.',
      image:'assets/img/user-1.jpg'
    }
  ];
  
  constructor(private pageTitleService: PageTitleService,
      public session: ASession,
      private request: ARequest,
      public translate: TranslateService) {}

  ngOnInit() {
    this.translate.get('User Profile').subscribe((res: string) => {
      this.pageTitleService.setTitle(res);
    });
    /*this.request.get('/user/me/' + this.session.name).subscribe(users => {
      const user = users.Users.find(el => el.Username === this.id);
      this.form.setValue({
        password: null,
        fullname: user.Attributes.find(el => el.Name == "given_name").Value,
        company: user.Attributes.find(el => el.Name == "custom:company").Value,
        account: user.Username,
        email: user.Attributes.find(el => el.Name == "email").Value,
        role: user.Attributes.find(el => el.Name == "custom:g1").Value,
        name:user.Username
      });*/
  }
}



