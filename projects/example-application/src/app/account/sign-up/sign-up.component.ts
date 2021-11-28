import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SnackBarService } from 'projects/tools/src/public-api';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeOnDestroy } from '../../core/UnsubscribeOnDestroy';
import { EmailValidator } from '../../shared/validators/email.validator';
import { MustMatchValidator } from '../../shared/validators/must-match.validator';
import { NotContainFirstNameOrLastNameValidator } from '../shared/validators/not-containt-firstname-or-lastname.validator';
import { PasswordStrengthValidator } from '../shared/validators/password-strength.validator';
import { SignUpRequest } from './../shared/models/sign-up.model';
import { AccountService } from './../shared/services/account.service';

@Component({
  selector: 'account-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent extends UnsubscribeOnDestroy implements OnInit, OnDestroy
{
  signUpForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
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
  }

  ngOnInit()
  {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, EmailValidator()]],
      password: ['', [Validators.required, Validators.minLength(8), PasswordStrengthValidator()]],
      passwordConfirmation: ['', [Validators.required]],
    }, {
      validators: [
        MustMatchValidator('password', 'passwordConfirmation'),
        NotContainFirstNameOrLastNameValidator('password', 'firstName', 'lastName')
      ]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/account/signin';
  }

  // convenience getter for easy access to form fields
  get form(): { [key: string]: AbstractControl; }
  {
    return this.signUpForm.controls;
  }

  onSubmit(): void
  {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signUpForm.invalid)
    {
      return;
    }

    this.isLoading = true;
    this.changeDetectorRef.detectChanges();

    const signUpRequest = new SignUpRequest(
      this.form['firstName'].value,
      this.form['lastName'].value,
      this.form['email'].value,
      this.form['password'].value
    );

    this.accountService.signUp(signUpRequest)
      .pipe(
        takeUntil(this.onDestroy$)
      )
      .subscribe({
        next: () =>
        {
          this.snackBarService.showSuccess(this.translateService.instant("MESSAGE.THE_SIGN_UP_OPERATION_WAS_SUCCESSFUL"));

          this.isLoading = false;
          this.changeDetectorRef.detectChanges();

          this.router.navigate(['/account/signin']);
        },
        error: () =>
        {
          this.isLoading = false;
          this.changeDetectorRef.detectChanges();
        }
      });
  }
}
