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
  constructor(private route: Router, private session: ASession) { }

  ngOnInit() {
    //this.getUserInfo();
  }

  async getUserInfo() {
    //this.user = await Auth.currentAuthenticatedUser();

  }
}
