import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AccountService } from '../../account/shared/services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor
{
  constructor(private accountService: AccountService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) =>
      {
        debugger;
        if ([401, 403].indexOf(err.status) !== -1)
        {
          // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          this.accountService.logOut();
        }
        else if ([400].indexOf(err.status) !== -1)
        {
          // handle 400 status
        }
        else if (err.error instanceof Error)
        {
          // A client-side or network error occurred. Handle it accordingly.
          // console.error('An error occurred:', err.error.message);
        }
        else
        {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          const errorResponse = err;
          console.log(errorResponse);
        }
        const error = err.error.message || err.statusText;
        return throwError(() => error);
      })
    );
  }
}
