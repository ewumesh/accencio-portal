import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ms-usertable',
  templateUrl:'./usertable-component.html',
  styleUrls: ['./usertable-component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class UserTableComponent implements OnInit {

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
              public translate: TranslateService) {}

  ngOnInit() {
    this.translate.get('User Table').subscribe((res: string) => {
      this.pageTitleService.setTitle(res);
    });
  }	
}



