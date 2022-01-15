import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';

import PerfectScrollbar from 'perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';
import { Workbook } from '../../core/types/Workbook';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ASession } from 'request/session';
import { environment } from 'environments/environment';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Observable, forkJoin } from 'rxjs';
import { WorkbookPerm } from '../../core/types/WorkbookPerm';
import { ARequest } from 'request/request';
var i = 1;
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
   if (response.status === "OK") {

      newApp.openDocument("spot-" + i.toString());

      //var els = document.getElementsByClassName("chankya-base-container");

      //els[0].scrollTop = 0;

      i++;
      const wb = lwbsspot.find(el => el.id == ("spot-" + i.toString()));
      if (wb) {
         lloadspot(wb.analysis, wb.name, lwbsspot);
      }
   }
}

@Component({
   selector: 'ms-dash',
   templateUrl: './dash-component.html',
   styleUrls: ['./dash-component.scss'],
   encapsulation: ViewEncapsulation.None
})

export class DashComponent implements OnInit {

   wbsspot: Workbook[];
   wbs: Workbook[];
   public company: any;
   public config: AngularEditorConfig;

   @ViewChild('spotcont', null) spotcont: ElementRef;
   observer: MutationObserver;

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

   getDashboardData() {
      this.company = this.session.company;
      this.wbs = [];
      this.wbsspot = [];
      const allpermService = this.request.get('/permission/byidname/' + this.session.oid);
      allpermService.subscribe(result => {

         const wbData = (result as WorkbookPerm).w;
         this.initworkbooks(wbData);
      });
   }
   initworkbooks(workbooks: Workbook[]) {
      workbooks.forEach(element => {
         if (element.type == 999) {
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
            });*/
         //} 
         if (element.type == 3) {
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
               "spot-" + i.toString(),
               element.type,
               element.title,
               element.description,
               element.site,
               element.name,
               element.date,
               null, '', element.analysis, ''));
            i++;
         }
      });
      i = 1;
      lloadspot = this.loadspot;
      lwbsspot = this.wbsspot;
      if (!this.observer) {
         this.observer = new MutationObserver(mutations => {
            mutations.forEach(function (mutation) {
               if (mutation.addedNodes && mutation.addedNodes.length > 0 && mutation.addedNodes[0].childNodes) {
                  const id = (mutation.addedNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0] as HTMLElement).id;
                  const wb = lwbsspot.find(el => el.id == id);
                  //console.log(id);
                  //if (id == "spot-1")
                  lloadspot(wb.analysis, wb.name);
               }
            });
         });
         const config = { attributes: true, childList: true, characterData: true };
         this.observer.observe(this.spotcont.nativeElement, config);
      }
   }

   constructor(private pageTitleService: PageTitleService,
      public translate: TranslateService,
      private router: Router,
      private sanitizer: DomSanitizer,
      private request: ARequest,
      private session: ASession) {
      i = 1;
      this.config = {
         editable: false,
         showToolbar: false,
         translate: 'no'
      };
   }

   ngOnInit() {
      this.translate.get('AccencioView').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
      this.getDashboardData();
   }
   dash1(id) {
      this.router.navigate(['/dashboard/' + id]);
   }
}
