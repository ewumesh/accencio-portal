import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Auth } from "aws-amplify";

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ASession } from 'src/request/session';
import { DomSanitizer } from '@angular/platform-browser';
import { Workbook } from './workbook';
import { environment } from '../../environments/environment';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {

  public username: any;
  public company: any;
  profile: any = {};
  user: any;

  wbs: Workbook[];

  public copyright: string;

  constructor(private router: Router,
              private sanitizer: DomSanitizer,
              private http: HttpClient,
              private session: ASession) { }

  ngOnInit() {
    this.getDashboardData();
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

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', jwtToken);

//console.log(headers);
    this.wbs = [];

    this.http.get(environment.API_GATEWAY + '/wb/' + this.company).subscribe(wbData => {
      (wbData as Workbook[]).forEach(element => {
        const params = "?username=" + element.account + "&target_site=" + element.site;
        this.http.get(environment.API_GATEWAY + '/auth/trusted' + params).subscribe(ticket => {
          const wbUrl = this.sanitizer.bypassSecurityTrustResourceUrl(environment.TABLEAU_API + "/trusted/" + ticket + "/t/" + element.site + "/views/" + element.name);
          this.wbs.push(new Workbook(
            element.site,
            element.name,
            element.date,
            wbUrl,""));
        });
      });
    });
  }

  private handleError(error: HttpErrorResponse) {
    console.log('error', error);
    // return an observable with a user-facing error message
    return throwError(
      'Internal Error.');
  }
}
