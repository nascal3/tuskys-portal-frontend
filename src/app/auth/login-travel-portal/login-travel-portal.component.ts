import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login-travel-portal',
  templateUrl: './login-travel-portal.component.html',
  styleUrls: ['./login-travel-portal.component.scss']
})
export class LoginTravelPortalComponent implements OnInit {
  travelPortalLoaded: string;

  constructor() { }

  ngOnInit() {
    this.travelPortalLoaded = "travel exp application";
  }

  onSubmit(f: NgForm) {
    console.log(f);
  }

}
