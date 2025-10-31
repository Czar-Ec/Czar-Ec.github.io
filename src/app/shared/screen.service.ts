import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

/**
 * A service that provides reactive observables for screen size detection.
 * It allows other components to easily know whether the user
 * is viewing the app on a mobile or desktop device.
 */
@Injectable({
  providedIn: 'root' // Makes this service available application-wide (singleton)
})
export class ScreenService {
  /**
   * Emits `true` whenever the viewport matches the predefined mobile breakpoints.
   * Emits `false` otherwise.
   */
  public isMobile$: Observable<boolean>;

  /**
   * Emits `true` whenever the viewport matches the predefined desktop breakpoints.
   * Emits `false` otherwise.
   */
  public isDesktop$: Observable<boolean>;

  /**
   * The BreakpointObserver from Angular CDK observes viewport size changes
   * and emits values based on whether the current screen width matches
   * specified CSS media query breakpoints.
   */
  constructor(private breakpointObserver: BreakpointObserver) {

    // Observe the "Handset" breakpoint (mobile screens)
    this.isMobile$ = this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall, Breakpoints.Handset])
      .pipe(
        // Convert the BreakpointState object into a boolean (true = matches)
        map(result => result.matches),

        // shareReplay ensures all subscribers share the same latest value
        // and prevents the observable from re-running for each new subscriber.
        shareReplay({ bufferSize: 1, refCount: true })
      );

    // Observe the "Web" breakpoint (desktop screens)
    this.isDesktop$ = this.breakpointObserver.observe([Breakpoints.Web])
      .pipe(
        map(result => result.matches),
        shareReplay({ bufferSize: 1, refCount: true })
      );
  }
}
