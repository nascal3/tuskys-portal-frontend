import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelexpPortalPageComponent } from './travelexp-portal-page.component';

describe('TravelexpPortalPageComponent', () => {
  let component: TravelexpPortalPageComponent;
  let fixture: ComponentFixture<TravelexpPortalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelexpPortalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelexpPortalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
