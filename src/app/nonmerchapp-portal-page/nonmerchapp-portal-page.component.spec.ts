import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonmerchappPortalPageComponent } from './nonmerchapp-portal-page.component';

describe('NonmerchappPortalPageComponent', () => {
  let component: NonmerchappPortalPageComponent;
  let fixture: ComponentFixture<NonmerchappPortalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonmerchappPortalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonmerchappPortalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
