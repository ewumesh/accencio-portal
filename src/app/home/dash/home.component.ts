import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import PerfectScrollbar from 'perfect-scrollbar';
import { Auth, Hub } from 'aws-amplify';
import { TranslateService } from '@ngx-translate/core';
import { ARequest } from 'request/request';
import { Workbook } from 'app/core/types/Workbook';
import { ASession } from 'request/session';
import { AuthServices } from 'app/service/auth/auth.service';
import { BaseComponent } from 'app/core/BaseControler';
import { Router } from '@angular/router';
import { Library } from 'app/libraries/list/Library';
import { Notification } from '../../core/types/Notification';


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
      private authService: AuthServices,
      public translate: TranslateService) {
   }

   ngOnInit() {

      let isUserLogged = JSON.parse(localStorage.getItem("userStatus"));
      if(isUserLogged) {
         localStorage.removeItem("userStatus");
         location.reload();
      }

      this.translate.get('Home').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
      debugger;
      const rperm2 = this.request.get('/org/byid/' + this.session.oid);
      rperm2.subscribe(org => {
         this.session.company = org.name;

         this.request.get('/permission/byidname/' + this.session.oid).subscribe(
            res => {
               this.workbooks = res.w;
               const ids = this.workbooks.map(el => el.id);

               this.request.get('/message/notif/' + this.session.oid + '/' + this.session.username).subscribe(
                  res2 => {
                     let n = res2;
                     n = n.filter(f => ids.includes(f['wb']));
                     n = n.sort((a: Notification, b: Notification) => {
                        return new Date(b.date).getTime() - new Date(a.date).getTime() ;
                    })
                     this.notifications = [];
                     (n as Notification[]).forEach(el => {
                        let ee = this.notifications.find(x=> x.msg === el.msg);
                        if (this.notifications.length < 5 && !ee)
                        {
                           this.notifications.push(el);
                        }
                     });

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
