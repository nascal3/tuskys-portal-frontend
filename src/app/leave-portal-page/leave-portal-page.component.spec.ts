import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavePortalPageComponent } from './leave-portal-page.component';

describe('LeavePortalPageComponent', () => {
  let component: LeavePortalPageComponent;
  let fixture: ComponentFixture<LeavePortalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavePortalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavePortalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
