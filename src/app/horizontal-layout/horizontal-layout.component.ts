import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, HostListener, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../core/page-title/page-title.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { Subscription } from 'rxjs';
import PerfectScrollbar from 'perfect-scrollbar';
import { filter } from 'rxjs/operators';
import { CoreService } from '../service/core/core-service.service';
declare var $ : any;
import { AuthService } from '../service/auth/auth.service';
declare var require;

const screenfull = require('screenfull');

@Component({
   selector: 'ms-horizontal',
   templateUrl:'./horizontal-layout-component.html',
})

export class HorizontalLayoutComponent implements OnInit, AfterViewInit {

   currentLang = 'en';

   url    : string;
   header : string;

   root   : any = 'ltr';
   layout : any = 'ltr';
   public innerWidth: any;
   headerSkinColor  : any = "red";

   dark             : boolean;
   boxed            : boolean;
   customizerIn     : boolean = false;
   isFullscreen     : boolean = false;
   chatWindowOpen   : boolean = false;
   chatSidebar      : boolean = false;
   isMobile         : boolean = false;
   sidebarClosed    : boolean = false;

   private _mediaSubscription        : Subscription;
   private _routerEventsSubscription : Subscription;
   private _router                   : Subscription;

  	constructor(private coreService:CoreService, 
               private pageTitleService: PageTitleService,
               public translate: TranslateService,
               private router: Router,
               private authService: AuthService) {

      const browserLang: string = translate.getBrowserLang();
      translate.use(browserLang.match(/en|fr/) ? browserLang : 'en'); 
    }

   ngAfterViewInit() {
      /** Add oveflow-menu class for horizontal layout on small screen resolution **/
      this.innerWidth = window.innerWidth;
      if(this.innerWidth <= 959){
         this.router.navigate(['/dashboard/dashboard-v1']);
      }
      if ($('.horizontal-menu').length > 0) {
         $(".horizontal-menu > li").each(function() {
            var $obj = $(this).offset();
            if (($(window).width()) - ($obj.left) < 600) {
               $(this).addClass("overflow-left-menu");
            }
         });
      }
   }

   ngOnInit() {

      this._router = this.router.events.pipe(
      filter((event:Event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
         this.url = event.url;
      });

      if (this.url != '/session/login' && this.url != '/session/register' && this.url != '/session/forgot-password' && this.url != '/session/lockscreen') {

         /** Perfect scrollbar for chat window **/
         const elemChatbar = <HTMLElement>document.querySelector('.chat-inner ');
         if (window.matchMedia(`(min-width: 960px)`).matches) {
            const ps = new PerfectScrollbar(elemChatbar);
         }
      }

      this.pageTitleService.title.subscribe((val: string) => {
         this.header = val;
      });

      //Add class on focus of search box in header
      document.getElementById('search-field').addEventListener("focusin",function(){
         document.getElementById('search-field').parentElement.classList.add("search-active");
      })
      document.getElementById('search-field').addEventListener("focusout",function(){
         document.getElementById('search-field').parentElement.classList.remove("search-active");
      })
   }

   ngOnDestroy() {
      this._router.unsubscribe();
      /**  this._mediaSubscription.unsubscribe(); **/
   }

  	/** Detect the screen resolution size on resize and perform action accordingly **/
   @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.innerWidth = window.innerWidth;

      if ($('.horizontal-menu').length > 0) {
         $(".horizontal-menu > li").each(function() {
            var $obj = $(this).offset();
            if (($(window).width()) - ($obj.left) < 600) {
               $(this).addClass("overflow-left-menu");
            }
         });
      }

      if(this.innerWidth <= 959){
         this.router.navigate(['/dashboard/dashboard-v1']);
      }
   }

   /** Functionality of full screen event **/
   toggleFullscreen() {
      if (screenfull.enabled) {
         screenfull.toggle();
         this.isFullscreen = !this.isFullscreen;
      }
   }

   /**
     * customizerFunction is used to open and close the customizer.
     */
   customizerFunction() {
      this.customizerIn = !this.customizerIn;
   }

   /**
     * chatWindowFunction is used to open and close the chat window.
     */
   chatWindowFunction() {
      this.chatWindowOpen = !this.chatWindowOpen;
   }
    
   /**
     * chatSidebarFunction is used to open and close the chat sidebar list.
     */
   chatSidebarFunction(){
      this.chatSidebar = !this.chatSidebar;
   }

   /**
     * changeHeaderColor function filter the color for header section.
     */
   changeHeaderColor(color){
      this.headerSkinColor = color; 
   }

   /**
     * changeRTL method is used to change the layout of template.
     */
   changeRTL(isChecked) {
      if(isChecked){
         this.layout = "rtl"
         this.coreService.rtlShowStatus = true;
      } else {
         this.layout = "ltr"
         this.coreService.rtlShowStatus = false;
      }
   } 

   /**
     * logOut method is used to log out the  template.
     */
   logOut() {
      this.authService.logOut();
   }

	
}



