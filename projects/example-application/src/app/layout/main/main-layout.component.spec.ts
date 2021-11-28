import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { HeaderModule } from '../shared/header/header.module';
import { MainLayoutComponent } from './main-layout.component';

const BASE_MODULES = [
  CommonModule,
  RouterModule,
  RouterTestingModule,
  HttpClientModule,
  HttpClientTestingModule,
  BrowserAnimationsModule
];
const APP_MODULES = [SharedModule];
const LAYOUT_MODULES = [HeaderModule];
const VENDORS_MODULES = [TranslateModule.forChild({ extend: true })];

describe('MainLayoutComponent', () =>
{
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [MainLayoutComponent],
      imports: [
        ...BASE_MODULES,
        ...APP_MODULES,
        ...LAYOUT_MODULES,
        ...VENDORS_MODULES
      ],
      providers: [
        TranslateStore
      ]
    })
      .compileComponents();
  });

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
