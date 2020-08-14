import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import PerfectScrollbar from 'perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';
import { ARequest } from 'request/request';
import { Workbook } from 'app/core/types/Workbook';
import { ASession } from 'request/session';
import { AuthService } from 'app/service/auth/auth.service';
import { BaseComponent } from 'app/core/BaseControler';
import { Router } from '@angular/router';
import { Library } from 'app/libraries/list/Library';


@Component({
   selector: 'ms-home-2',
   templateUrl: './home-component.html',
   styleUrls: ['./home-component.scss'],
   encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

   public workbooks: Workbook[];
   public dashboards: Library[];
   public notifications: Notification[] = [];

   constructor(private pageTitleService: PageTitleService,
      private request: ARequest,
      private session: ASession,
      private router: Router,
      private authService: AuthService,
      public translate: TranslateService) {
   }

   ngOnInit() {
      this.translate.get('Home').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });

      const rperm2 = this.request.get('/org/byname/' + this.session.company);
      rperm2.subscribe(orgs => {
         const org = orgs[0];
         this.session.oid = org.id;

         this.request.get('/permission/byidname/' + this.session.oid + '/' + this.session.username).subscribe(
            res => {
               this.workbooks = res.w;
               const ids = this.workbooks.map(el => el.id);

               this.request.get('/message/notif/' + this.session.oid).subscribe(
                  res2 => {
                     this.notifications = res2;
                     this.notifications = this.notifications.filter(f => ids.includes(f['wb']));
                  });

               this.request.get('/library/all/' + this.session.company).subscribe(
                  res3 => {
                     let adashboards = (res3 as Library[]);
                     this.dashboards = adashboards.filter(f => {
                        for (let i = 0, len = f.list.length; i < len; i++) {
                          if (ids.includes(f.list[i].id)) {
                              return true;
                          }
                        }
                        return false;
                     });
                  });
            }
         );
      });

   }

   gotoworkbook(id) {
      this.router.navigate(['/dashboard/' + id]);
   }
   gotodashboard(id) {
      this.router.navigate(['/dashboard/lib/' + id]);
   }

   gotonotif(n) {
      if (n.status == 1) // wb
         this.gotoworkbook(n.wb);
      if (n.status == 2) // dashboards
         this.gotodashboard(n.wb);
   }
}
