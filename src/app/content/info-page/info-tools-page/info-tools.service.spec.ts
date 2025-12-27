import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TOOLS_URL } from '../../../app.tokens';
import { InfoToolsService } from './info-tools.service';
import { provideHttpClient } from '@angular/common/http';

describe('InfoTools', () => {
  let service: InfoToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: TOOLS_URL, useValue: 'example_url' },
      ],
    });
    service = TestBed.inject(InfoToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
