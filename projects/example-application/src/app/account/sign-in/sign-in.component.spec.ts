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
import { SignInResponse } from '../shared/models';
import { AccountService } from '../shared/services';
import { SignInComponent } from './sign-in.component';

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

describe('SignInComponent', () =>
{
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [SignInComponent],
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
      ]
    }).compileComponents();
  });

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(SignInComponent);
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
    component.signInForm.controls['email'].setValue('test@.com');
    expect(component.signInForm.controls['email'].valid).toBeFalsy();
  });

  it('email format validation should be valid', () =>
  {
    component.signInForm.controls['email'].setValue('test@email.com');
    expect(component.signInForm.controls['email'].valid).toBeTruthy();
  });

  it('signInForm should be invalid', () =>
  {
    component.signInForm.controls['email'].setValue('');
    component.signInForm.controls['password'].setValue('');
    expect(component.signInForm.valid).toBeFalsy();
  });

  it('signInForm should be valid', () =>
  {
    component.signInForm.controls['email'].setValue('test@test.com');
    component.signInForm.controls['password'].setValue('signInForm');
    expect(component.signInForm.valid).toBeTruthy();
  });
});

const stubData = {};

class AccountServiceMock
{
  signUp(): Observable<SignInResponse>
  {
    return new Observable<any>(observer =>
    {
      observer.next(
        stubData
      );
    });
  }
}
