import { Component, OnInit } from '@angular/core';
import { Store} from "@ngxs/store";
import {Router} from "@angular/router";
import {AddPageRoute} from "../actions/page.actions";

@Component({
  selector: 'app-travelapp-portal-page',
  templateUrl: './travelapp-portal-page.component.html',
  styleUrls: ['./travelapp-portal-page.component.scss']
})
export class TravelappPortalPageComponent implements OnInit {

  constructor(private store: Store, private router: Router) {
    this.store.dispatch(new AddPageRoute({page: this.router.url}));
  }

  ngOnInit() {

  }

}
