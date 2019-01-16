import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTopSectionComponent } from './main-top-section.component';

describe('MainTopSectionComponent', () => {
  let component: MainTopSectionComponent;
  let fixture: ComponentFixture<MainTopSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTopSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTopSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
