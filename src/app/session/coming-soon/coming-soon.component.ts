import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-coming-soon',
   templateUrl:'./coming-soon-component.html',
   styleUrls: ['./coming-soon-component.scss'],
   encapsulation: ViewEncapsulation.None,
})
export class ComingSoonComponent {
  
  constructor( public translate: TranslateService) { }

}



