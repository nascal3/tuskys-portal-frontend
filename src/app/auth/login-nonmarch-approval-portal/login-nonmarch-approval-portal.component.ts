import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login-nonmarch-approval-portal',
  templateUrl: './login-nonmarch-approval-portal.component.html',
  styleUrls: ['./login-nonmarch-approval-portal.component.scss']
})
export class LoginNonmarchApprovalPortalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f);
  }

}
