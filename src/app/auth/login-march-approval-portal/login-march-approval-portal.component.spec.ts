import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMarchApprovalPortalComponent } from './login-march-approval-portal.component';

describe('LoginMarchApprovalPortalComponent', () => {
  let component: LoginMarchApprovalPortalComponent;
  let fixture: ComponentFixture<LoginMarchApprovalPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMarchApprovalPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMarchApprovalPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
