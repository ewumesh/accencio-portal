import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Auth } from "aws-amplify";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isl = false;
}
