import { Component, OnInit } from '@angular/core';
import {AddPageRoute} from "../actions/page.actions";
import {Store} from "@ngxs/store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-merchapp-portal-page',
  templateUrl: './merchapp-portal-page.component.html',
  styleUrls: ['./merchapp-portal-page.component.scss']
})
export class MerchappPortalPageComponent implements OnInit {

  constructor(private store: Store, private router: Router) {
    // ADD ACTIVE ROUTE TO STATE
    this.store.dispatch(new AddPageRoute({page: this.router.url}));
  }

  ngOnInit() {
  }

}
