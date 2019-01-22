import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNonmarchApprovalPortalComponent } from './login-nonmarch-approval-portal.component';

describe('LoginNonmarchApprovalPortalComponent', () => {
  let component: LoginNonmarchApprovalPortalComponent;
  let fixture: ComponentFixture<LoginNonmarchApprovalPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginNonmarchApprovalPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNonmarchApprovalPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
