import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'ms-userlist',
    templateUrl:'./userlist-component.html',
    styleUrls: ['./userlist-component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class UserListComponent implements OnInit {

  public users = [];
   constructor(private pageTitleService: PageTitleService,
              public translate: TranslateService) {}

  ngOnInit() {
    this.translate.get('User List').subscribe((res: string) => {
      this.pageTitleService.setTitle(res);
    });
  }
	
}



