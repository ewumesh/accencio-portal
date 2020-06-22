import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-user-contact',
    templateUrl:'./user-contact-component.html',
    styleUrls: ['./user-contact-component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UserContactComponent implements OnInit {

  users : object[] = [{
    name : 'Eugene Lambert',
    post : 'Business Partner',
    image : 'assets/img/user-1.jpg'
  },{
    name : 'Zachary Barrett',
    post : 'Creative Director',
    image : 'assets/img/user-2.jpg'
  },{
    name : 'Stanley Simmons',
    post : 'Jr. IOS Dev.',
    image : 'assets/img/user-3.jpg'
  },{
    name : 'Annie Jackson',
    post : 'Jr. Android Dev.',
    image : 'assets/img/user-4.jpg'
  },{
    name : 'Minerva Estrada',
    post : 'Event Manager',
    image : 'assets/img/user-5.jpg'
  },{
    name : 'Ronald Hart',
    post : 'Social Media Expert',
    image : 'assets/img/user-6.jpg'
  }];

  users2 : object[] = [{
    name : 'Eugene Lambert',
    post : 'HR',
    image : 'assets/img/user-1.jpg'
  },{
    name : 'Zachary Barrett',
    post : 'Sales Consultant',
    image : 'assets/img/user-2.jpg'
  },{
    name : 'Stanley Simmons',
    post : 'Event Manager',
    image : 'assets/img/user-3.jpg'
  },{
    name : 'Annie Jackson',
    post : 'UI/UX',
    image : 'assets/img/user-4.jpg'
  },{
    name : 'Minerva Estrada',
    post : 'PHP Developer',
    image : 'assets/img/user-5.jpg'
  },{
    name : 'Ronald Hart',
    post : 'Java Master',
    image : 'assets/img/user-6.jpg'
  },{
    name : 'Alfred McKinney',
    post : 'System Analysr',
    image : 'assets/img/user-7.jpg'
  },{
    name : 'Julia Warren',
    post : 'Sr.Designer',
    image : 'assets/img/user-8.jpg'
  }];

  users3 : object[] = [{
    name: 'Dennis Cook',
    post: 'UX Expert',
    image: 'assets/img/user-5.jpg'
  },{
    name: 'Andrew Johnston',
    post: 'Android Dev.',
    image: 'assets/img/user-6.jpg'
  },{
    name: 'Garrett Osborne',
    post: 'UX Expert',
    image: 'assets/img/user-7.jpg'
  },{
    name: 'Travis Perry',
    post: 'Sales Consultant',
    image: 'assets/img/user-2.jpg'
  }];

  constructor(private pageTitleService: PageTitleService,
              public translate: TranslateService) {}

  ngOnInit() {
    this.translate.get('User Contact').subscribe((res: string) => {
      this.pageTitleService.setTitle(res);
    });
  }
	
}



