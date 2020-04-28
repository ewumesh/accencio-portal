import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Auth } from "aws-amplify";

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {

  public email: any;
  profile:any = {};
  user: any;

  public copyright: string;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.getUserInfo();
    this.getStaticData();
  }

  onLogOut() {
    Auth.signOut()
      .then(data => {
        //console.log(data);
        console.log("You are successfully logged out");
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
    this.email = this.profile.attributes["email"];
  }

  getStaticData(): void {
    const url = "https://hmdz1lq98a.execute-api.us-east-1.amazonaws.com/Prod/item/topx";
    this.http.get(url).subscribe((response) => {
      this.copyright = response[0].title;
    });
  }

  private handleError(error: HttpErrorResponse) {
    console.log('error', error);
    // return an observable with a user-facing error message
    return throwError(
      'Internal Error.');
  }
}
