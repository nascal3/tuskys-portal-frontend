import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelappPortalPageComponent } from './travelapp-portal-page.component';

describe('TravelappPortalPageComponent', () => {
  let component: TravelappPortalPageComponent;
  let fixture: ComponentFixture<TravelappPortalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelappPortalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelappPortalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
