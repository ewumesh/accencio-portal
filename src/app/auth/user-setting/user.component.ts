import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { ASession } from 'src/request/session';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userName: string;
  user: any;
  signstatus: string = 'signup'
  toVerifyEmail: boolean = false;
  constructor(private route: Router, private session: ASession) { }

  ngOnInit() {
    //this.getUserInfo();
  }

  async getUserInfo() {
    //this.user = await Auth.currentAuthenticatedUser();

  }
  singUpToAWS(email: HTMLInputElement, username: HTMLInputElement, password: HTMLInputElement, company: HTMLInputElement ) {
    this.userName = username.value;
    const user = {
      username: username.value,
      password: password.value,
      attributes: {
          email: email.value,
          'custom:company': company.value
      }
    };
    Auth.signUp(user)
      .then(data => {
        console.log(data);
        this.toVerifyEmail = true;
        this.signstatus = "";
      })
      .catch(err => console.log(err));
  }

  onVerify(verifycode: HTMLInputElement) {
    // After retrieving the confirmation code from the user
    Auth.confirmSignUp(this.userName, verifycode.value, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true
      }).then(data => {
        console.log(data);
        this.toVerifyEmail = false;
        this.route.navigate(['/signin']);
      })
        .catch(err => console.log(err));
  }
}
