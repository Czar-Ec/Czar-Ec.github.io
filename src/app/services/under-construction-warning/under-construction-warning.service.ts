import { Injectable, Inject } from '@angular/core';
import { CD_PORTFOLIO_PATH } from '../../app.tokens';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UnderConstructionWarningService {

  // if the snackbar was dismissed or not
  private _dismissed = false;

  get dismissed() {
    return this._dismissed;
  }

  set dismissed(dismissSnackbar: boolean) {
    this._dismissed = dismissSnackbar;
  }

  private _snackBarRef: MatSnackBarRef<any>;

  set snackBarRef(sbRef: MatSnackBarRef<any>) {
    if (!sbRef) {
      return;
    }

    this._snackBarRef = sbRef;

    this._snackBarRef.afterDismissed().subscribe(() => {
      this._dismissed = true;
    });
  }

  constructor(
    @Inject(CD_PORTFOLIO_PATH) private cdPath: string
  ) { }

  /**
   * Return if the current application is the cd deployed version
   */
  public isCDDeploy() {
    return !!window.location.href.includes(this.cdPath);
  }

  /**
   * Dismisses the snackbar
   */
  public dismissSnackbar() {
    // do nothing if snackbar wasn't opened
    if (!this._snackBarRef) {
      return;
    }

    this._snackBarRef.dismiss();
  }
}
