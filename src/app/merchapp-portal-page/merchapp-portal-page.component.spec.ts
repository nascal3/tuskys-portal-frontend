import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchappPortalPageComponent } from './merchapp-portal-page.component';

describe('MerchappPortalPageComponent', () => {
  let component: MerchappPortalPageComponent;
  let fixture: ComponentFixture<MerchappPortalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchappPortalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchappPortalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
