import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { LoadingModule, SnackBarModule } from 'projects/tools/src/public-api';
import { SharedModule } from '../../shared/shared.module';
import { SignUpComponent } from './sign-up.component';

const BASE_MODULES = [CommonModule, RouterModule, ReactiveFormsModule];
const APP_MODULES = [SharedModule];
const TOOLS_MODULES = [SnackBarModule, LoadingModule];
const COMPONENTS = [SignUpComponent];
const MATERIAL_MODULES = [MatIconModule, MatButtonModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...BASE_MODULES,
    ...APP_MODULES,
    ...MATERIAL_MODULES,
    ...TOOLS_MODULES],
  exports: [
    ...COMPONENTS,
    ...APP_MODULES,
    ...MATERIAL_MODULES,
    ...TOOLS_MODULES
  ]
})
export class SignUpModule { }
