import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login-march-approval-portal',
  templateUrl: './login-march-approval-portal.component.html',
  styleUrls: ['./login-march-approval-portal.component.scss']
})
export class LoginMarchApprovalPortalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f);
  }

}
