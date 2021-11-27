import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackBarComponent } from './snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService
{
  defaultDurationInSeconds = 5;
  defaultHorizontalPosition: MatSnackBarHorizontalPosition = 'left';
  defaultVerticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar) { }

  private show(
    message: string,
    panelClass: string,
    action?: string,
    onAction?: () => void,
    horizontalPosition?: MatSnackBarHorizontalPosition,
    verticalPosition?: MatSnackBarVerticalPosition,
    durationInSeconds?: number,
  )
  {
    this._snackBar.openFromComponent(SnackBarComponent, {
      data: { message: message, action: action },
      duration: (durationInSeconds || this.defaultDurationInSeconds) * 1000,
      panelClass: panelClass,
      horizontalPosition: horizontalPosition || this.defaultHorizontalPosition,
      verticalPosition: verticalPosition || this.defaultVerticalPosition
    } as MatSnackBarConfig);

    if (onAction && this._snackBar != null)
    {
      //TODO: fix object null possible
      //this._snackBar._openedSnackBarRef.onAction().subscribe(onAction);
    }
  }

  public showInfo(
    message: string,
    action?: string,
    onAction?: () => void,
    horizontalPosition?: MatSnackBarHorizontalPosition,
    verticalPosition?: MatSnackBarVerticalPosition,
    durationInSeconds?: number
  )
  {
    this.show(message, 'info', action, onAction, horizontalPosition, verticalPosition);
  }

  public showSuccess(
    message: string,
    action?: string,
    onAction?: () => void,
    horizontalPosition?: MatSnackBarHorizontalPosition,
    verticalPosition?: MatSnackBarVerticalPosition,
    durationInSeconds?: number,
  )
  {
    this.show(message, 'success', action, onAction, horizontalPosition, verticalPosition, durationInSeconds);
  }

  public showError(
    message: string,
    action?: string,
    onAction?: () => void,
    horizontalPosition?: MatSnackBarHorizontalPosition,
    verticalPosition?: MatSnackBarVerticalPosition,
    durationInSeconds?: number,
  )
  {
    this.show(message, 'warn', action, onAction, horizontalPosition, verticalPosition, durationInSeconds);
  }
}
