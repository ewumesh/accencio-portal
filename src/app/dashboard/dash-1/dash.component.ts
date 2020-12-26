import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';

import { TranslateService } from '@ngx-translate/core';
import { Workbook } from '../../core/types/Workbook';
import { Router, ActivatedRoute, RouterState } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { ASession } from 'request/session';
import { environment } from 'environments/environment';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Observable, forkJoin } from 'rxjs';
import { WorkbookPerm } from '../../core/types/WorkbookPerm';
import { ARequest } from 'request/request';
import { Message } from 'app/core/types/Message';
var lwbsspot: any;
var lloadspot: any;
var loginLauncher;
function getLoginElement() {
   var els = document.getElementsByClassName("chankya-base-container");
   var ell = document.getElementById('loginLauncher');
   if (!ell) {
      loginLauncher = document.createElement("div");
      loginLauncher.id = "loginLauncher";
      loginLauncher.style = "float:right";
      loginLauncher.className = "mt-1 mr-4";
      var infoSection = document.createElement("div");
      infoSection.innerText = "You need to authenticate before loading the requested analysis.";
      loginLauncher.appendChild(infoSection);

      var button = document.createElement("button");
      button.innerText = "Log in";
      button.id = "btnLoginSpot";
      button.className = "btn btn-info";
      loginLauncher.appendChild(button);

      //document.body.appendChild(loginLauncher);
      els[0].prepend(loginLauncher);
      return button;
   }
   return document.getElementById('btnLoginSpot');
}
function onReady2Callback(response, newApp) {
   if (loginLauncher) {
      // Remove the custom login launch UI.
      loginLauncher.parentNode.removeChild(loginLauncher);
   }
   console.log(response.status)
   if (response.status === "OK") {

      newApp.openDocument("spot-1");

      //const wb = lwbsspot.find(el => el.id === 'spot-1');
      //if (wb) {
      //   lloadspot(wb.analysis, wb.name, lwbsspot);
     // }
   }
}

@Component({
   selector: 'ms-dash-1',
   templateUrl: './dash-component.html',
   styleUrls: ['./dash-component.scss'],
   encapsulation: ViewEncapsulation.None
})

export class Dash1Component implements OnInit {

   wbsspot: Workbook[];
   wbs: Workbook[];

   public company: any;
   public config: AngularEditorConfig;
   public classChart = '';
   public classMessage = 'd-none';
   public tabIcon = 'icon-bubble';

   @ViewChild('spotcont', null) spotcont: ElementRef;
   observer: MutationObserver;

   constructor(private pageTitleService: PageTitleService,
      private location: Location,
      public translate: TranslateService,
      private route: ActivatedRoute,
      private router: Router,
      private sanitizer: DomSanitizer,
      private request: ARequest,
      private session: ASession) {
      this.config = {
         editable: false,
         showToolbar: false,
         translate: 'no'
      };

   }
   private returnUrl: string;
   private id: string;
   ngOnInit() {
      this.pageTitleService.setTitle('');
      this.route.params.subscribe(params => {
         this.id = params['id'];
         this.getDashboardData();
      });
      this.route.queryParams.subscribe((params) => {
         this.returnUrl = params.returnUrl;
     });
   }

   public loadspot(analysis, name, lwbsspot) {
      var customizationInfo = {
         showAbout: false,
         showAnalysisInformationTool: false,
         showAuthor: false,
         showClose: false,
         showCustomizableHeader: false,
         showDodPanel: false,
         showExportFile: false,
         showExportVisualization: false,
         showFilterPanel: true,
         showHelp: false,
         showLogout: false,
         showPageNavigation: true,
         showReloadAnalysis: false,
         showStatusBar: true,
         showToolBar: false,
         showUndoRedo: false
      }
      var parameters = '';
      var reloadInstances = true;
      var apiVersion = "7.14";

      //lwbsspot.forEach(wb=> {
      spotfire.webPlayer.createApplication(
         environment.SPOTFIRE_API,
         customizationInfo,
         analysis,
         parameters,
         reloadInstances,
         apiVersion,
         onReady2Callback,
         getLoginElement
      );
   }
   // getPreDashboardData(oid, dashid) {
   //    this.session.oid =  oid;
   //    this.session.company = "1"
   //    this.getDashboardData();   

   // }
   getDashboardData() {
      this.company = this.session.company;
      this.wbs = [];
      this.wbsspot = [];
      const allpermService = this.request.get('/permission/byidname/' + this.session.oid);
      allpermService.subscribe(result => {
         const wbData = (result as WorkbookPerm).w;
         const w = wbData.find(el => el.id === this.id);
         if (w)
            this.initworkbooks(w);
      });
   }
   goBack() {
     // this.location.back();
     //this.router.navigateByUrl(this.returnUrl);
     this.router.navigate([".."]);
      console.log( 'goBack()...' );
   }
   initworkbooks(element: Workbook) {

      if (element.type == 1) {
         const params = "?username=" + element.account + "&target_site=" + element.site;
         this.request.get('/auth/trusted' + params).subscribe(ticket => {
            const wbUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.TABLEAU_API + "/trusted/" + ticket + "/t/" + element.site + "/views/" + element.name + '&:toolbar=yes&:customViews=no&:refresh=yes&:showShareOptions=false');
            this.wbs.push(new Workbook(
               element.id,
               element.name,
               element.type,
               element.title,
               element.description,
               element.site,
               element.name,
               element.date,
               wbUrl, '', '', null));
         });
      } else if (element.type == 3) {
         this.wbs.push(new Workbook(
            element.id,
            element.name,
            element.type,
            element.title,
            element.description,
            element.site,
            element.name,
            element.date,
            null, '', '', element.content));
      } else { //spotfire
         this.wbsspot.push(new Workbook(
            element.id,
            "spot-1",
            element.type,
            element.title,
            element.description,
            element.site,
            element.name,
            element.date,
            null, '', element.analysis, ''));
      }
      lloadspot = this.loadspot;
      lwbsspot = this.wbsspot;
      if (!this.observer) {
         this.observer = new MutationObserver(mutations => {
            mutations.forEach(function (mutation) {
               if (mutation.addedNodes && mutation.addedNodes.length > 0 && mutation.addedNodes[0].childNodes) {
                  const id = (mutation.addedNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0] as HTMLElement).id;
                  const wb = lwbsspot.find(el => el.id == id);
                  console.log(id);
                  //if (id == "spot-1")
                  lloadspot(wb.analysis, wb.name);
               }
            });
         });
         //this.observer.disconnect();
         const config = { attributes: true, childList: true, characterData: true };
         this.observer.observe(this.spotcont.nativeElement, config);
      }
   }

   switch() {
      this.classChart = this.classChart === '' ? 'd-none' : '';
      this.classMessage = this.classMessage === '' ? 'd-none' : '';
      this.tabIcon = this.classChart === 'd-none' ? 'icon-chart' : 'icon-bubble';
   }
   back() {
      this.location.back();
   }
}
