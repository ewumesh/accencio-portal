import { Component, OnInit, ViewEncapsulation, AfterViewInit, Input } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { orders, products, customers, refunds, cost, pie } from '../dashboard.data';
import PerfectScrollbar from 'perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';
import { ASession } from 'request/session';
import { ARequest } from 'request/request';
import { Message } from 'app/core/types/Message';
import { Observable } from 'rxjs/Rx';
import { CoreService } from 'app/service/core/core-service.service';


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
   constructor(
      public coreService: CoreService,
		private request: ARequest,
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

         this.messages.forEach(m=> {
            m.isEditing = false;
            m.canEdit = m.from1 === this.session.username;
         });
      });
   }
   getPrivateMessages() {
      const params = "/" + this.session.oid + "/" + this.id;
      this.request.get('/message/byme' + params).subscribe(res => {
         this.privateMessages = res;
      });
   }

   onCancel(id, index, list) {
      list[index].isEditing = false;
   }
   onSave(id, index, list) {
      this.addmi(this.id, list[index].msg, list[index]).subscribe(() => {
         list[index].isEditing = false;
      });
   }
   onEdit(id, index, list) {
      list[index].isEditing = true;
   }
   onDelete(id, index, list) {
      this.coreService.deleteUserDialog("Are you sure you want to delete this message?").
      then(res => {
         if (res === true) {
            this.request.delete('/message/delete/' + id).subscribe(users => {
               list.splice(index, 1);
            });
         }
      });
   }
   addmessage() {
      this.addmi(this.id, this.fi, null).subscribe(() => {
         if (this.priv)
            this.getPrivateMessages();
         else
            this.getMessages();
         this.fi = '';
      });
   }
   addmi(refId, msg, m): Observable<any> {
     let iid = '_' + Math.random().toString(36).substr(2, 9);
     let status = this.priv ? 3 : 1;
     let to = null;
     debugger;
     if(m) {
      iid = m.id;
      status = m.status;
      to = m.to1;
     }
      return this.request.post('/message/add', {
         id: iid,
         org: this.session.company,
         orgid: this.session.oid,
         type: 'm',
         wb: refId,
         date: new Date(),
         from: this.session.username,
         to: to,
         status: status,
         msg: msg
      });
   }
}














