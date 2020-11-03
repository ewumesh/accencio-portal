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


  constructor(private pageTitleService: PageTitleService,
              public translate: TranslateService) {}

  ngOnInit() {
    this.translate.get('User Table').subscribe((res: string) => {
      this.pageTitleService.setTitle(res);
    });
  }	
}



