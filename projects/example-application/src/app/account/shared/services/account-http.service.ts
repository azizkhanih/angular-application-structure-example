import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { SignInRequest, SignInResponse, SignUpRequest, SignUpResponse } from '../models';

@Injectable({ providedIn: 'root' })
export class AccountHttpService
{
  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiUrl;

  signUp(signUpRequest: SignUpRequest): Observable<SignUpResponse>
  {
    return this.http.post<SignUpResponse>(`${ this.apiUrl }/users`, signUpRequest);
  }

  signIn(signInRequest: SignInRequest): Observable<SignInResponse>
  {
    return this.http.post<SignInResponse>(`${ this.apiUrl }/signin`, signInRequest);
  }
}
