import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPageNavigationComponent } from './info-page-navigation.component';

describe('InfoPageNavigationComponent', () => {
  let component: InfoPageNavigationComponent;
  let fixture: ComponentFixture<InfoPageNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPageNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPageNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
