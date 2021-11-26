import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/example-application/src/environments/environment';
import { Observable } from 'rxjs';
import { AccountService } from '../../account/shared/services';

@Injectable()
export class TokenInterceptor implements HttpInterceptor
{
  constructor(private accountService: AccountService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    const account = this.accountService.accountValue;
    const isLoggedIn = account?.accessToken;
    const isApiUrl = request.url.startsWith(environment.apiUrl);

    if (isLoggedIn && isApiUrl)
    {
      request = request.clone({
        setHeaders: {
          authorization: `Bearer ${ account.accessToken }`
        }
      });
    }

    return next.handle(request);
  }
}