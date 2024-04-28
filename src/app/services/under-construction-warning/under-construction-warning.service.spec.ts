import { TestBed, tick, fakeAsync } from '@angular/core/testing';

import { UnderConstructionWarningService } from './under-construction-warning.service';
import { CD_PORTFOLIO_PATH } from 'src/app/app.tokens';
import { Subject } from 'rxjs';

xdescribe('UnderConstructionWarningService', () => {

  let service: UnderConstructionWarningService;

  const stubPortfolioPath = 'path';

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: CD_PORTFOLIO_PATH, useValue: stubPortfolioPath }
    ]
  }));

  it('should be created', () => {
    service = TestBed.get(UnderConstructionWarningService);
    expect(service).toBeTruthy();
  });

  it('should return if the snackbar was dismissed or not', () => {
    service['_dismissed'] = true;
    expect(service.dismissed).toBeTruthy();
  });

  it('should set the snackbar as dismissed', () => {
    service.dismissed = true;
    expect(service['_dismissed']).toBeTruthy();
  });

  it('should not set the snackBarRef if it is null', () => {
    service.snackBarRef = null;
    expect(service['_snackBarRef']).toBeUndefined();
  });

  it('should set the snackBarRef and set dismiss to true on dismiss', fakeAsync(() => {
    const snackbar = {
      afterDismissed: () => new Subject()
    };

    service.snackBarRef = snackbar as any;

    expect(service['_snackBarRef']).not.toBeUndefined();
    (service['_snackBarRef'].afterDismissed() as any).next();
    tick();
    expect(service['_dismissed']).toBeTruthy();
  }));

  describe('METHOD: dismissSnackbar', () => {
    it('should return if snackbar is not set', () => {
      service['_snackBarRef'] = undefined;
      expect(service.dismissSnackbar()).toBeUndefined();
    });

    it('should set dismissed to true and dismiss the snackbar', () => {
      const snackbarRef = {
        dismiss: () => {}
      };

      service['_snackBarRef'] = snackbarRef as any;
      const dismissSpy = spyOn<any>(service['_snackBarRef'], 'dismiss');
      service.dismissSnackbar();

      expect(dismissSpy).toHaveBeenCalled();
    });
  });
});
