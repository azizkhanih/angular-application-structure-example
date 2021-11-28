import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';
import { SharedModule } from '../../../shared/shared.module';
import { HeaderComponent } from './header.component';

const BASE_MODULES = [CommonModule, RouterModule, RouterTestingModule];
const APP_MODULES = [SharedModule];
const MATERIAL_MODULES = [MatIconModule, MatToolbarModule, MatButtonModule];
const VENDORS_MODULES = [TranslateModule.forChild({ extend: true })];

describe('HeaderComponent', () =>
{
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        ...BASE_MODULES,
        ...APP_MODULES,
        ...MATERIAL_MODULES,
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
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
