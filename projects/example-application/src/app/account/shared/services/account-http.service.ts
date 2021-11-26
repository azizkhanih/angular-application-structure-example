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

  signUp(signUp: SignUpRequest): Observable<SignUpResponse>
  {
    return this.http.post<SignUpResponse>(`${ this.apiUrl }/users`, signUp);
  }

  signIn(signIn: SignInRequest): Observable<SignInResponse>
  {
    return this.http.post<SignInResponse>(`${ this.apiUrl }/signin`, signIn);
  }
}
