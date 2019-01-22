import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTravelApprovalPortalComponent } from './login-travel-approval-portal.component';

describe('LoginTravelApprovalPortalComponent', () => {
  let component: LoginTravelApprovalPortalComponent;
  let fixture: ComponentFixture<LoginTravelApprovalPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTravelApprovalPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTravelApprovalPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
