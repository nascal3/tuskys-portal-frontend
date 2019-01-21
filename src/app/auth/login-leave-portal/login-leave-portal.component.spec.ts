import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLeavePortalComponent } from './login-leave-portal.component';

describe('LoginLeavePortalComponent', () => {
  let component: LoginLeavePortalComponent;
  let fixture: ComponentFixture<LoginLeavePortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLeavePortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLeavePortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
