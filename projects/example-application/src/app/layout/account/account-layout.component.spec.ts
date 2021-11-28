import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AccountLayoutComponent } from './account-layout.component';

const BASE_MODULES = [
  CommonModule,
  RouterModule,
  RouterTestingModule,
  HttpClientModule,
  HttpClientTestingModule,
  BrowserAnimationsModule
];

describe('AccountLayoutComponent', () =>
{
  let component: AccountLayoutComponent;
  let fixture: ComponentFixture<AccountLayoutComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [AccountLayoutComponent],
      imports: [
        ...BASE_MODULES,
      ],
    })
      .compileComponents();
  });

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(AccountLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
