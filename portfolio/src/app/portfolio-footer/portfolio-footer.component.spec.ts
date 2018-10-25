import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFooterComponent } from './portfolio-footer.component';

describe('PortfolioFooterComponent', () => {
  let component: PortfolioFooterComponent;
  let fixture: ComponentFixture<PortfolioFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
