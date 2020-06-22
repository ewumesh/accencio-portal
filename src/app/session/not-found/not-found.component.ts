import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-not-found',
   templateUrl:'./not-found-component.html',
   styleUrls: ['./not-found-component.scss'],
   encapsulation: ViewEncapsulation.None,
})

export class NotFoundComponent {

  constructor(private router: Router,
              public translate: TranslateService) { }
	
}



