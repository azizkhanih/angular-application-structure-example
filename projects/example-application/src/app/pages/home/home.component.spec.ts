import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';

const BASE_MODULES = [
  CommonModule,
  RouterModule,
  RouterTestingModule,
  HttpClientModule,
  HttpClientTestingModule,
  BrowserAnimationsModule
];

describe('HomeComponent', () =>
{
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        ...BASE_MODULES,
      ],
    })
      .compileComponents();
  });

  beforeEach(() =>
  {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
