import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login-leave-portal',
  templateUrl: './login-leave-portal.component.html',
  styleUrls: ['./login-leave-portal.component.scss']
})
export class LoginLeavePortalComponent implements OnInit {
  leavePortalLoaded: string;

  constructor() { }

  ngOnInit() {
    this.leavePortalLoaded = "Leave";
  }

  onSubmit(f: NgForm) {
    console.log(f);
  }
}
