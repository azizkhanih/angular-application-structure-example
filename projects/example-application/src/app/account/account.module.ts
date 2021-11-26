import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const BASE_MODULES = [CommonModule, RouterModule, ReactiveFormsModule];
const APP_MODULES = [SharedModule,];
const COMPONENTS = [SignInComponent, SignUpComponent];
const MATERIAL_MODULES = [MatIconModule, MatButtonModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...BASE_MODULES,
    ...APP_MODULES,
    ...MATERIAL_MODULES,
    AccountRoutingModule],
  exports: [
    ...COMPONENTS,
    ...APP_MODULES,
    ...MATERIAL_MODULES,
  ]
})
export class AccountModule { }
