import { Component, OnInit } from '@angular/core';
import { Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {AddPageRoute} from "../actions/page.actions";

@Component({
  selector: 'app-travelexp-portal-page',
  templateUrl: './travelexp-portal-page.component.html',
  styleUrls: ['./travelexp-portal-page.component.scss']
})
export class TravelexpPortalPageComponent implements OnInit {

  constructor(private store: Store, private router: Router) {
    // ADD ACTIVE ROUTE TO STATE
    this.store.dispatch(new AddPageRoute({page: this.router.url}));
  }

  ngOnInit() {
  }

}
