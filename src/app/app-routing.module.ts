import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { FormsModule} from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from "./material.module";

import { MainTopSectionComponent } from './main-top-section/main-top-section.component';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { LoginLeavePortalComponent } from './auth/login-leave-portal/login-leave-portal.component';
import { LoginTravelPortalComponent } from './auth/login-travel-portal/login-travel-portal.component';
import { LoginTravelApprovalPortalComponent } from './auth/login-travel-approval-portal/login-travel-approval-portal.component';
import { LoginMarchApprovalPortalComponent } from './auth/login-march-approval-portal/login-march-approval-portal.component';
import { LoginNonmarchApprovalPortalComponent } from './auth/login-nonmarch-approval-portal/login-nonmarch-approval-portal.component';
import { LeavePortalPageComponent } from './leave-portal-page/leave-portal-page.component';
import { TravelappPortalPageComponent } from './travelapp-portal-page/travelapp-portal-page.component';
import { TravelexpPortalPageComponent } from './travelexp-portal-page/travelexp-portal-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent },
  {path: 'login/leave', component: LoginLeavePortalComponent },
  {path: 'login/travel', component: LoginTravelPortalComponent },
  {path: 'login/travelapp', component: LoginTravelApprovalPortalComponent},
  {path: 'login/marchapp', component: LoginMarchApprovalPortalComponent },
  {path: 'login/nonmarch', component: LoginNonmarchApprovalPortalComponent },
  {path: 'leave', component: LeavePortalPageComponent },
  {path: 'travel', component: TravelappPortalPageComponent },
  {path: 'travelexp', component: TravelexpPortalPageComponent }
];

@NgModule({
  declarations: [
    LandingPageComponent,
    MainTopSectionComponent,
    UsersProfileComponent,
    SearchInputComponent,
    LoginLeavePortalComponent,
    LoginTravelPortalComponent,
    LoginTravelApprovalPortalComponent,
    LoginMarchApprovalPortalComponent,
    LoginNonmarchApprovalPortalComponent,
    LeavePortalPageComponent,
    TravelappPortalPageComponent,
    TravelexpPortalPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
