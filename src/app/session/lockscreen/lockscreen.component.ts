import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-lockscreen',
   templateUrl:'./lockscreen-component.html',
   styleUrls: ['./lockscreen-component.scss'],
   encapsulation: ViewEncapsulation.None,
})
export class LockScreenComponent {

   constructor(private router   : Router,
               public translate : TranslateService) { }

}



