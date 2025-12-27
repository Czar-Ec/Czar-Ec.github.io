import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoToolsFilter } from './info-tools-filter.component';
import { TOOLS_URL } from '../../../../app.tokens';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { InfoToolsService } from '../info-tools.service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('InfoToolsFilter', () => {
  let component: InfoToolsFilter;
  let fixture: ComponentFixture<InfoToolsFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoToolsFilter],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClientTesting(),
        { provide: TOOLS_URL, useValue: 'example_url' },
        {
          provide: InfoToolsService,
          useValue: { applyFilters: () => {} } // 👈 swallow async call
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoToolsFilter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
