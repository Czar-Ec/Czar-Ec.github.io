import { TestBed } from '@angular/core/testing';
import { ScreenService } from './screen.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { of } from 'rxjs';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ScreenService', () => {
  let service: ScreenService;
  let mockBreakpointObserver: jasmine.SpyObj<BreakpointObserver>;

  beforeEach(() => {
    mockBreakpointObserver = jasmine.createSpyObj('BreakpointObserver', ['observe']);

    // Return different results depending on the queries
    mockBreakpointObserver.observe.and.callFake((queries: string[]) => {
      if (queries.includes(Breakpoints.Handset)) {
        return of({ matches: true } as BreakpointState); // mobile matches
      } else if (queries.includes(Breakpoints.Web)) {
        return of({ matches: false } as BreakpointState); // desktop does not match
      }
      return of({ matches: false } as BreakpointState);
    });

    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        ScreenService,
        { provide: BreakpointObserver, useValue: mockBreakpointObserver }
      ]
    });

    service = TestBed.inject(ScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit true when handset breakpoint matches (mobile)', (done) => {
    service.isMobile$.subscribe(value => {
      expect(value).toBeTrue();
      done();
    });
  });
});
