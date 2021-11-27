import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SnackBarService } from 'projects/tools/src/public-api';
import { MustMatch } from '../../shared/helpers/validators/must-match.validator';
import { SignUpRequest } from './../shared/models/sign-up.model';
import { AccountService } from './../shared/services/account.service';

@Component({
  selector: 'account-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements OnInit
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
  { }

  ngOnInit()
  {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required],
    }, {
      validator: MustMatch('password', 'passwordConfirmation')
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

    const user = {
      firstName: this.form['firstName'].value,
      lastName: this.form['lastName'].value,
      email: this.form['email'].value,
      password: this.form['password'].value
    } as SignUpRequest;

    this.accountService.signUp(user).subscribe({
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
