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
   templateUrl:'./m-component.html',
   styleUrls: ['./m-component.scss'],
   encapsulation: ViewEncapsulation.None
})

export class MComponent implements OnInit {
   
   public fi: string;
   @Input('id') id: string;
   public messages: Message[];
   constructor( private request: ARequest,
      private session: ASession,
      public translate: TranslateService) {
   }

   ngOnInit() {
      this.getMessages();
   }

   getMessages() {
      const params = "/" + this.session.oid + "/" + this.id;
      this.request.get('/message/byw' + params).subscribe(res => {
         this.messages = res;
      });
   }
   addmessage() {
      this.addmi(this.id, this.fi).subscribe(() => {
         this.getMessages();
         this.fi = '';
      });
   }
   addmi(refId, msg) : Observable<any>{
      return this.request.post('/message/add', {
			id:  '_' + Math.random().toString(36).substr(2, 9),
			org: this.session.company,
			orgid: this.session.oid,
			type: 'm',
			wb: refId,
			date: new Date(),
			from: this.session.username,
			to: '',
			status: 1,
			msg: msg
		  });
   }
}














