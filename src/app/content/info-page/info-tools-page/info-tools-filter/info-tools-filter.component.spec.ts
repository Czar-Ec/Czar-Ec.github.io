import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoToolsFilter } from './info-tools-filter.component';

describe('InfoToolsFilter', () => {
  let component: InfoToolsFilter;
  let fixture: ComponentFixture<InfoToolsFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoToolsFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoToolsFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
