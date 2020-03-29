import { TestBed } from '@angular/core/testing';

import { IconService } from './icon.service';
import { ICON_CONFIG } from '../app.tokens';

describe('IconService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: ICON_CONFIG, useValue: []}
    ]
  }));

  it('should be created', () => {
    const service: IconService = TestBed.get(IconService);
    expect(service).toBeTruthy();
  });
});
