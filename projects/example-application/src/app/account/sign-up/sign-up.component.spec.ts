import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';
import { LoadingModule, SnackBarModule } from 'projects/tools/src/public-api';
import { Observable } from 'rxjs';
import { SharedModule } from '../../shared/shared.module';
import { SignUpResponse } from '../shared/models';
import { AccountService } from '../shared/services';
import { SignUpComponent } from './sign-up.component';

const BASE_MODULES = [
  CommonModule,
  RouterModule,
  RouterTestingModule,
  HttpClientModule,
  HttpClientTestingModule,
  BrowserAnimationsModule,
  ReactiveFormsModule
];

const APP_MODULES = [SharedModule];
const TOOLS_MODULES = [SnackBarModule, LoadingModule];
const MATERIAL_MODULES = [MatIconModule, MatButtonModule];
const VENDORS_MODULES = [TranslateModule.forChild({ extend: true })];

describe('SignUpComponent', () =>
{
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [
        ...BASE_MODULES,
        ...APP_MODULES,
        ...TOOLS_MODULES,
        ...MATERIAL_MODULES,
        ...VENDORS_MODULES
      ],
      providers: [
        TranslateStore,
        { provide: AccountService, useClass: AccountServiceMock }
      ],
    }).compileComponents();
  });

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });

  it('should set submitted to true', () =>
  {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  });

  it('should call the submitted method', async () =>
  {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = await fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('email format validation should be inValid', () =>
  {
    component.signUpForm.controls['email'].setValue('test@.com');
    expect(component.signUpForm.controls['email'].valid).toBeFalsy();
  });

  it('email format validation should be valid', () =>
  {
    component.signUpForm.controls['email'].setValue('test@email.com');
    expect(component.signUpForm.controls['email'].valid).toBeTruthy();
  });

  it('password format UPPERCASE validation should be inValid', () =>
  {
    component.signUpForm.controls['password'].setValue('signupform');
    expect(component.signUpForm.controls['password'].valid).toBeFalsy();
  });

  it('password format LOWERCASE validation should be inValid', () =>
  {
    component.signUpForm.controls['password'].setValue('SIGNUPFORM');
    expect(component.signUpForm.controls['password'].valid).toBeFalsy();
  });

  it('password format length 8 characters validation should be inValid', () =>
  {
    component.signUpForm.controls['password'].setValue('signUP');
    expect(component.signUpForm.controls['password'].valid).toBeFalsy();
  });

  it('password format and length validation should be valid', () =>
  {
    component.signUpForm.controls['password'].setValue('signUPform');
    expect(component.signUpForm.controls['password'].valid).toBeTruthy();
  });

  it('password and passwordConfirmation must match validation should be invalid', () =>
  {
    component.signUpForm.controls['password'].setValue('signUPform');
    component.signUpForm.controls['passwordConfirmation'].setValue('signupform');
    expect(component.signUpForm.controls['passwordConfirmation'].valid).toBeFalsy();
  });

  it('password and passwordConfirmation must match validation should be valid', () =>
  {
    component.signUpForm.controls['password'].setValue('signUPform');
    component.signUpForm.controls['passwordConfirmation'].setValue('signUPform');
    expect(component.signUpForm.controls['passwordConfirmation'].valid).toBeTruthy();
  });

  it('password format should be valid', () =>
  {
    component.signUpForm.controls['password'].setValue('signUPform');
    expect(component.signUpForm.controls['password'].valid).toBeTruthy();
  });

  it('signUpForm should be invalid', () =>
  {
    component.signUpForm.controls['firstName'].setValue('');
    component.signUpForm.controls['lastName'].setValue('');
    component.signUpForm.controls['email'].setValue('');
    component.signUpForm.controls['password'].setValue('');
    component.signUpForm.controls['passwordConfirmation'].setValue('');
    expect(component.signUpForm.valid).toBeFalsy();
  });

  it('signUpForm should be valid', () =>
  {
    component.signUpForm.controls['firstName'].setValue('first name');
    component.signUpForm.controls['lastName'].setValue('last name');
    component.signUpForm.controls['email'].setValue('test@test.com');
    component.signUpForm.controls['password'].setValue('signUPform');
    component.signUpForm.controls['passwordConfirmation'].setValue('signUPform');
    expect(component.signUpForm.valid).toBeTruthy();
  });

  // it('should able to signup', () =>
  // {
  //   component.signUpForm = {

  //   };
  //   component.onSubmit();
  //   expect(component.isLogon).toBeTruthy();
  // });
});

const stubData = {};

class AccountServiceMock
{
  signUp(): Observable<SignUpResponse>
  {
    return new Observable<any>(observer =>
    {
      observer.next(
        stubData
      );
    });
  }
}