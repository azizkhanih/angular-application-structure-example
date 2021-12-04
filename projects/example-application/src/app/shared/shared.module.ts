import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingModule, SnackBarModule } from 'projects/tools/src/public-api';
import { DynamicFormModule } from './components/dynamic-form/dynamic-form.module';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];
const MATERIAL_MODULES: [] = [];
const SHARED_COMPONENTS: [] = [];
const SHARED_MODULES = [DynamicFormModule];
const DIRECTIVES: [] = [];
const TOOLS_MODULES = [SnackBarModule, LoadingModule];
const VENDORS_MODULES = [TranslateModule];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
  ],
  imports: [
    ...BASE_MODULES,
    ...MATERIAL_MODULES,
    ...VENDORS_MODULES,
    ...DIRECTIVES,
    ...TOOLS_MODULES,
    ...SHARED_MODULES
  ],
  exports: [
    ...BASE_MODULES,
    ...MATERIAL_MODULES,
    ...TOOLS_MODULES,
    ...VENDORS_MODULES,
    ...SHARED_COMPONENTS,
    ...SHARED_MODULES,
    ...DIRECTIVES
  ]
})
export class SharedModule { }
