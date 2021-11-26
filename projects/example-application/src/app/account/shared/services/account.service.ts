import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { storageKey } from '../../../shared/resources/constant';
import { StorageService } from '../../../shared/storages/storage.service';
import { Account } from '../models';
import { SignInRequest, SignInResponse } from './../models/sign-in.model';
import { SignUpRequest, SignUpResponse } from './../models/sign-up.model';
import { AccountHttpService } from './account-http.service';

@Injectable({ providedIn: 'root' })
export class AccountService
{
  private destroy$ = new Subject();

  private accountSubject: BehaviorSubject<Account> = new BehaviorSubject<Account>({} as Account);
  public account: Observable<Account> = this.accountSubject.asObservable();

  constructor(
    private router: Router,
    private storageService: StorageService,
    private accountHttpService: AccountHttpService,
  )
  {
    const account = storageService.get<Account>(storageKey.ACCOUNT) as Account;
    this.accountSubject.next(account);
  }

  public get accountValue(): Account
  {
    return this.accountSubject.value;
  }

  setAccount(account: Account): void
  {
    this.accountSubject.next(account);
    this.storageService.set(storageKey.ACCOUNT, account);
  }

  logOut(): void
  {
    this.accountSubject.next({} as Account);
    this.storageService.remove(storageKey.ACCOUNT);
    this.router.navigate(['/account/signin']);
  }

  signIn(createSession: SignInRequest): Observable<SignInResponse>
  {
    return this.accountHttpService.signIn(createSession);
  }

  signUp(user: SignUpRequest): Observable<SignUpResponse>
  {
    return this.accountHttpService.signUp(user);
  }

  ngOnDestroy(): void
  {
    this.destroy$.next(null);
    this.destroy$.complete();
  };
}
