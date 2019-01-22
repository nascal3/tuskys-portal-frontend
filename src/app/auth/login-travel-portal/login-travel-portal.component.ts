import { Component, OnInit } from '@angular/core';

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

}
