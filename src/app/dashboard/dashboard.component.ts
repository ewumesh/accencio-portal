import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Auth } from "aws-amplify";

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ASession } from 'src/request/session';
import { DomSanitizer } from '@angular/platform-browser';
import { Workbook } from './workbook';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {

  public username: any;
  public company: any;
  profile:any = {};
  user: any;

  wbs: Workbook[];
  
  public copyright: string;

  constructor(private router: Router,
              private sanitizer: DomSanitizer,
              private http: HttpClient,
              private session: ASession) {}

  ngOnInit() {
    this.getUserInfo();
    this.getDashboardData();
  }

  onLogOut() {
    Auth.signOut()
      .then(data => {
        this.router.navigate(["/login"]);
      })
      .catch(err => console.log(err));
  }


  async getUserInfo() {
    this.profile = await Auth.currentUserInfo();
    this.user = await Auth.currentAuthenticatedUser();

    //console.log(this.profile);
    //console.log(this.user);
    //this.email = this.profile.attributes['email'];
    //if ( this.profile.attributes['profile'] ) {
    //  this.avatar = this.profile.attributes['profile'];
    //  this.currentAvatarUrl = await Storage.vault.get(this.avatar) as string;
   // }
    //this.fnameInput.setValue(this.profile.attributes['given_name']);
    //this.lnameInput.setValue(this.profile.attributes['family_name']);
    //this.phoneInput.setValue(this.profile.attributes['phone_number']);
    //this.loading.hide();
    this.username = this.user.username;
    this.company = this.user.attributes["custom:company"];
  }

  getDashboardData(): void {
    //var url = 'https://hmdz1lq98a.execute-api.us-east-1.amazonaws.com/Prod/item/topx';
    //this.http.get(url).subscribe((response) => {
    //  debugger;
      //this.copyright = response[0].title;
    //});

    this.wbs = [
      new Workbook("IP-CompView/IntellectualProperty", new Date(2020, 1, 1), null),
      new Workbook("IP-FolioView/Overview", new Date(2020, 1, 1), null),
      new Workbook("IP-GeoScape_PDE9/Overview", new Date(2020, 1, 1), null),
      new Workbook("IP-KinShip/IP-KinShip", new Date(2020, 1, 1), null),
      
    ]
    const url = 'https://hmdz1lq98a.execute-api.us-east-1.amazonaws.com/Prod/auth/trusted';
    this.wbs.forEach(element => {
    this.http.get(url).subscribe(tik => {
        element.url = this.sanitizer.bypassSecurityTrustResourceUrl("https://visualize.accencio.com/trusted/" + tik + "/t/Demo/views/" + element.name)
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
