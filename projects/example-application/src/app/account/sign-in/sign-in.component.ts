import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SnackBarService } from 'projects/tools/src/public-api';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeOnDestroy } from '../../core/UnsubscribeOnDestroy';
import { EmailValidator } from '../../shared/validators/email.validator';
import { Account } from '../shared/models';
import { AccountService } from '../shared/services';
import { SignInRequest } from './../shared/models/sign-in.model';

@Component({
  selector: 'account-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent extends UnsubscribeOnDestroy implements OnInit, OnDestroy
{
  signInForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  isLoading = false;
  submitted = false;
  returnUrl: string = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private accountService: AccountService,
    private translateService: TranslateService,
    private snackBarService: SnackBarService
  )
  {
    super();

    // redirect to main route if already logged in
    if (this.accountService.accountValue?.accessToken)
    {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void
  {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, EmailValidator()]],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get form(): { [key: string]: AbstractControl; }
  {
    return this.signInForm.controls;
  }

  onSubmit(): void
  {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signInForm.invalid)
    {
      return;
    }

    this.isLoading = true;
    this.changeDetectorRef.detectChanges();

    const signInRequest = new SignInRequest(
      this.form['email'].value,
      this.form['password'].value
    );

    // TODO: this is temp, we need to implement sign in service 
    setTimeout(() =>
    {
      this.snackBarService.showSuccess(this.translateService.instant("MESSAGE.THE_SERVICE_NOT_IMPLEMENTED"));
      this.isLoading = false;
      this.changeDetectorRef.detectChanges();
    }, 2000);
    return;

    // TODO: we need to implement sign in service 
    this.accountService.signIn(signInRequest)
      .pipe(
        takeUntil(this.onDestroy$)
      )
      .subscribe({
        next: (response) =>
        {
          const account = {
            email: signInRequest.email,
            accessToken: response.accessToken,
            refreshToken: response.refreshToken
          } as Account;

          this.accountService.setAccount(account);

          this.snackBarService.showSuccess(this.translateService.instant("MESSAGE.SUCCESSFUL_SIGN_IN"));

          this.router.navigate([this.returnUrl]);
        },
        error: () =>
        {
          this.isLoading = false;
          this.changeDetectorRef.detectChanges();
        }
      });
  }
}
