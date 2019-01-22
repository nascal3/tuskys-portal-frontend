import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTravelPortalComponent } from './login-travel-portal.component';

describe('LoginTravelPortalComponent', () => {
  let component: LoginTravelPortalComponent;
  let fixture: ComponentFixture<LoginTravelPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTravelPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTravelPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
