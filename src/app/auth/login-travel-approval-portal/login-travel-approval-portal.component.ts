import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login-travel-approval-portal',
  templateUrl: './login-travel-approval-portal.component.html',
  styleUrls: ['./login-travel-approval-portal.component.scss']
})
export class LoginTravelApprovalPortalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f);
  }

}
