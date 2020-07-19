import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';
import { Interactions } from 'aws-amplify';
@Component({
   selector: 'ms-chat',
   templateUrl: './chat-component.html',
   styleUrls: ['./chat-component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class ChatComponent implements OnInit {

   fi:string;

   public messages = [
   ];

   constructor(private pageTitleService: PageTitleService,
      public translate: TranslateService) {
   }

   ngOnInit() {
      this.translate.get('Chat').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
      this.sendtobot('Hi');
   }
   async sendtobot(userInput2) {
      // Provide a bot name and user input
      const response = await Interactions.send("accewb", userInput2);
      // Log chatbot response
     if (response['messageFormat'] === 'Composite') {
         (JSON.parse(response['message']).messages as Object[]).forEach(m => {
            this.messages.push({
               name: "accencio",
               type: 1,
               text: m['value'],
               cssclass: "chat-content sender",
               date: new Date()
            });
         });
         
      } else {
      this.messages.push({
         name: "accencio",
         type: 1,
         text: response['message'],
         cssclass: "chat-content sender",
         date: new Date()
      });
   }
      this.fi = '';
   }

   async sendmessage() {
      this.messages.push({
         name: "me",
         text: this.fi,
         type: 0,
         cssclass: "chat-content receiver",
         date: new Date()
      });
      await this.sendtobot(this.fi);
   }
}



