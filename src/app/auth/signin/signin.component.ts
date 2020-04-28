import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signstatus: string = 'signin'
  toVerifyEmail: boolean = false;
  userName: string;

  constructor( private route: Router) { }

  ngOnInit() {
  }

  singUpToAWS(email: HTMLInputElement,contactNo: HTMLInputElement,username: HTMLInputElement,password: HTMLInputElement) {
    
    this.userName = username.value;

    const user = {
      username: username.value,
      password: password.value,
      attributes: {
          email: email.value,          // optional
          phone_number: contactNo.value,   // optional - E.164 number convention
      }
    }
    Auth.signUp(user)
      .then(data => {
        console.log(data);
        this.toVerifyEmail = true;
        this.signstatus = "";
      })
      .catch(err => console.log(err));
  }

  signInToAWS(email: HTMLInputElement, password: HTMLInputElement ) {

    const authInfo = {
      username: email.value,
      password: password.value
    }

    Auth.signIn(authInfo).then(user => {
      this.route.navigate(['/dashboard']);
    })
      .catch(err => console.log(err));
  }
}
