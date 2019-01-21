import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from "./material.module";

import { MainTopSectionComponent } from './main-top-section/main-top-section.component';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { LoginLeavePortalComponent } from './auth/login-leave-portal/login-leave-portal.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent },
  {path: 'login/leave', component: LoginLeavePortalComponent }
];

@NgModule({
  declarations: [
    LandingPageComponent,
    MainTopSectionComponent,
    UsersProfileComponent,
    SearchInputComponent,
    LoginLeavePortalComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
