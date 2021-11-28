import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

const BASE_MODULES = [
  CommonModule,
  RouterModule,
  RouterTestingModule,
  HttpClientModule,
  HttpClientTestingModule,
  BrowserAnimationsModule
];

const VENDORS_MODULES = [];

describe('AppComponent', () =>
{
  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        ...BASE_MODULES
      ],
    }).compileComponents();
  });

  it('should create the app', () =>
  {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'example-application'`, () =>
  {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('');
  });
});
