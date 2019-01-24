import { Component, OnInit } from '@angular/core';
import {Select} from "@ngxs/store";
import {PageState} from "../state/page.state";
import {Observable} from "rxjs";
import {PageModel} from "../models/page.model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  activePage: PageModel;
  travelApp: boolean = false;
  leave: boolean = false;
  @Select(PageState.getActiveRoute) page$: Observable<PageModel>;

  constructor() {
  }

  ngOnInit() {
    this.page$.subscribe(res => {
      this.activePage = res;
      this.selectTabHighlight(this.activePage);
    });
  }

  selectTabHighlight(route) {
    if (route === '/travel') {
      this.travelApp = true;
    } else if (route === '/leave') {
      this.leave = true;
    }

  }

}
