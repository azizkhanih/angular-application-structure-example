import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../shared/models';
import { AccountService } from '../shared/services';
import { SignInRequest } from './../shared/models/sign-in.model';

@Component({
  selector: 'account-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit
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
    private accountService: AccountService,
  )
  {
    // redirect to main route if already logged in
    if (this.accountService.accountValue?.accessToken)
    {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void
  {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
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

    const signInRequest = {
      email: this.form['email'].value,
      password: this.form['password'].value,
    } as SignInRequest;

    this.accountService.signIn(signInRequest).subscribe({
      next: (response) =>
      {
        const account = {
          email: signInRequest.email,
          accessToken: response.accessToken,
          refreshToken: response.refreshToken
        } as Account;

        this.accountService.setAccount(account);

        // this.toastService.showSuccess(this.translateService.instant("MESSAGE.SUCCESSFUL_SIGN_IN"));

        this.router.navigate([this.returnUrl]);
      },
      error: () =>
      {
        this.isLoading = false;
      }
    });
  }
}
