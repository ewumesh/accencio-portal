import { Component, OnInit, OnChanges } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { ASession } from 'src/request/session';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserInfoComponent {
  constructor(private router: Router, public session: ASession) { }

  onLogOut() {
    Auth.signOut()
      .then(data => {
        this.session.isLogged = false;
        this.router.navigate(["/login"]);
      })
      .catch(err => console.log(err));
  }

}
