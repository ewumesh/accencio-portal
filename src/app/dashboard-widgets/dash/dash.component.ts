import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import { orders, products, customers, refunds, cost, pie } from '../dashboard.data';
import PerfectScrollbar from 'perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';
import { Workbook } from './workbook';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ASession } from 'request/session';
import { environment } from 'environments/environment';

var i = 1;
var lwbsspot: any;
var lloadspot: any;
function onReady2Callback(response, newApp) {
   if (response.status === "OK") {

      newApp.openDocument("spot-" + i.toString());

      i++;
      const wb = lwbsspot.find(el => el.id == ("spot-" + i.toString()));
      
      
      if (wb) {
         console.log(wb.analysis);
         lloadspot(wb.analysis, wb.name, lwbsspot);
      }
      //if (i == 1) {
         //   lloadspot('/IP-GeoScapeTM Library/Demo1/EGFR_2020Q1_Demo','TLR7antag_2020Q1_Clinical1', lwbsspot);
      //}

      //if (i == 2) {
         // lloadspot('/Demo/PDE9_IP-GeoScape1','TLR7antag_2020Q1_Clinical', lwbsspot);
      //}
      
   }
}

//declare function onReadyCallback(response, newApp) : any;
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
         showFilterPanel: false,
         showHelp: false,
         showLogout: false,
         showPageNavigation: true,
         showReloadAnalysis: false,
         showStatusBar: false,
         showToolBar: false,
         showUndoRedo: false
      }
      console.log(analysis);
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
         onReady2Callback
      );
   }

   getDashboardData() {
      this.company = this.session.company;
      this.wbs = [];
      this.wbsspot = [];
      this.http.get(environment.API_GATEWAY + '/wb/' + this.company).subscribe(wbData => {
         (wbData as Workbook[]).forEach(element => {
            if (!element.analysis) {
               const params = "?username=" + element.account + "&target_site=" + element.site;
               this.http.get(environment.API_GATEWAY + '/auth/trusted' + params).subscribe(ticket => {
                  const wbUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.TABLEAU_API + "/trusted/" + ticket + "/t/" + element.site + "/views/" + element.name);
                  this.wbs.push(new Workbook(
                     element.name,
                     element.title,
                     element.description,
                     element.site,
                     element.name,
                     element.date,
                     wbUrl, '', ''));
               });
            } else { //spotfire
               this.wbsspot.push(new Workbook(
                  "spot-" + i.toString(),
                  element.title,
                  element.description,
                  element.site,
                  element.name,
                  element.date,
                  null, '', element.analysis));
               i++;
               console.log(element.analysis);
               //this.loadspot(element.analysis, element.name);
            }
         });
         i = 1;
         lloadspot = this.loadspot;
         lwbsspot = this.wbsspot;
         this.observer = new MutationObserver(mutations => {
            mutations.forEach(function (mutation) {
               if (mutation.addedNodes[0].childNodes) {
                  const id = (mutation.addedNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0] as HTMLElement).id;
                  const wb = lwbsspot.find(el => el.id == id);
                  if (id == "spot-1")
                     lloadspot(wb.analysis, wb.name);
               }
            });
            //lloadspot('/Covid-19/TLR7antag_2020Q1_Clinical','TLR7antag_2020Q1_Clinical', lwbsspot);
         });
         const config = { attributes: true, childList: true, characterData: true };
         this.observer.observe(this.spotcont.nativeElement, config);
      });
   }

   constructor(private pageTitleService: PageTitleService,
      public translate: TranslateService,
      private router: Router,
      private sanitizer: DomSanitizer,
      private http: HttpClient,
      private session: ASession) {
         i = 1;
   }

   ngOnInit() {
      this.translate.get('Dashboard').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
      this.getDashboardData();
   }

}
