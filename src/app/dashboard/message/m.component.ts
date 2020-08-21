import { Component, OnInit, ViewEncapsulation, AfterViewInit, Input } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { orders, products, customers, refunds, cost, pie } from '../dashboard.data';
import PerfectScrollbar from 'perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';
import { ASession } from 'request/session';
import { ARequest } from 'request/request';
import { Message } from 'app/core/types/Message';
import { Observable } from 'rxjs/Rx';


@Component({
   selector: 'wb-message',
   templateUrl: './m-component.html',
   styleUrls: ['./m-component.scss'],
   encapsulation: ViewEncapsulation.None
})

export class MComponent implements OnInit {

   public fi: string;
   public priv: boolean;
   @Input('id') id: string;
   @Input('classMessage') classMessage: string;
   public messages: Message[];
   public privateMessages: Message[];
   constructor(private request: ARequest,
      private session: ASession,
      public translate: TranslateService) {
   }

   ngOnInit() {
      this.getMessages();
      this.getPrivateMessages();
   }

   getMessages() {
      const params = "/" + this.session.oid + "/" + this.id;
      this.request.get('/message/byw' + params).subscribe(res => {
         this.messages = res;
      });
   }
   getPrivateMessages() {
      const params = "/" + this.session.oid + "/" + this.id;
      this.request.get('/message/byme' + params).subscribe(res => {
         this.privateMessages = res;
      });
   }
   addmessage() {
      this.addmi(this.id, this.fi).subscribe(() => {
         if (this.priv)
            this.getPrivateMessages();
         else
            this.getMessages();
         this.fi = '';
      });
   }
   addmi(refId, msg): Observable<any> {
      return this.request.post('/message/add', {
         id: '_' + Math.random().toString(36).substr(2, 9),
         org: this.session.company,
         orgid: this.session.oid,
         type: 'm',
         wb: refId,
         date: new Date(),
         from: this.session.username,
         to: '',
         status: (this.priv ? 3 : 1),
         msg: msg
      });
   }
}














