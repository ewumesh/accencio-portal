import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { Auth } from "aws-amplify";

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/Rx';
import { ASession } from 'src/request/session';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../environments/environment';
import { Workbook } from '../dashboard/workbook';

import { faExpand, faWindowRestore, faWindowMinimize, faRestroom, faAdjust, faAddressBook, faWindowClose,faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: "app-dashboard2",
  templateUrl: "./dashboard2.component.html",
  styleUrls: ["./dashboard2.component.scss"]
})
export class Dashboard2Component implements OnInit, AfterViewInit {
  faWindowClose = faWindowClose;
  faWindowMaximize = faWindowMaximize;
  faWindowRestore = faWindowRestore;
  faAdjust = faAdjust;
  faAddressBook = faAddressBook;
  faRestroom = faRestroom;
  faWindowMinimize = faWindowMinimize;
  faExpand = faExpand;
  constructor(private router: Router,
    private sanitizer: DomSanitizer,
    private http: HttpClient,
    private session: ASession) { }

  public username: any;
  public company: any;
  profile: any = {};
  user: any;

  wbs: Workbook[];
  wbsspot: Workbook[];

  public isLoaded = false;
  public copyright: string;
  @ViewChild('spotcont', null) spotcont: ElementRef;
  observer: MutationObserver;
  ngOnInit() {
    this.getDashboardData();
  }
  ngAfterViewInit() {
  }
  public loadspot(analysis, name) {
    var c_analysisPath = analysis;

    var c_parameters = "";  //Optional configuration block
    var customization = new spotfire.webPlayer.Customization();  //Optional configuration settings

    var app;

    var c_reloadAnalysisInstance = false;

    app = new spotfire.webPlayer.Application(environment.SPOTFIRE_API, customization, c_analysisPath, c_parameters, c_reloadAnalysisInstance);
    //Hide UI elements
    customization.showDodPanel = false;
    customization.showStatusBar = false;
    customization.showToolBar = false;
    customization.showPageNavigation = false;
    customization.showClose = false;
    customization.showAnalysisInfo = true;
    customization.showExportFile = true;
    customization.showExportVisualization = true;
    customization.showUndoRedo = true;
    customization.showFilterPanel = true;
    app.openDocument(name, name, customization);
  }


  onLogOut() {
    Auth.signOut()
      .then(data => {
        this.router.navigate(["/login"]);
      })
      .catch(err => console.log(err));
  }


  async getDashboardData() {
    this.profile = await Auth.currentUserInfo();
    this.user = await Auth.currentAuthenticatedUser();
    this.username = this.user.username;
    this.company = this.user.attributes["custom:company"];


    const jwtToken = this.user.getSignInUserSession().getIdToken().getJwtToken();

    this.wbs = [];
    this.wbsspot = [];
    this.http.get(environment.API_GATEWAY + '/wb/' + this.company).subscribe(wbData => {
      (wbData as Workbook[]).forEach(element => {
        if (!element.analysis) {
          const params = "?username=" + element.account + "&target_site=" + element.site;
          this.http.get(environment.API_GATEWAY + '/auth/trusted' + params).subscribe(ticket => {
            const wbUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.TABLEAU_API + "/trusted/" + ticket + "/t/" + element.site + "/views/" + element.name);
            this.wbs.push(new Workbook(
              element.title,
              element.description,
              element.site,
              element.name,
              element.date,
              wbUrl, '', ''));
          });
        } else { //spotfire
          this.wbsspot.push(new Workbook(
            element.title,
            element.description,
            element.site,
            element.name,
            element.date,
            null, '', element.analysis));
        }
      });
      const lloadspot = this.loadspot;
      const lwbsspot = this.wbsspot;
      this.observer = new MutationObserver(mutations => {
        mutations.forEach(function (mutation) {
          if (mutation.addedNodes[0].childNodes) {
            const id = (mutation.addedNodes[0].childNodes[0].childNodes[1].childNodes[1] as HTMLElement).id;
            const wb = lwbsspot.find(el => el.name == id);
            lloadspot(wb.analysis, wb.name);
          }
        });
      });
      const config = { attributes: true, childList: true, characterData: true };
      this.observer.observe(this.spotcont.nativeElement, config);
    });
  }
}
