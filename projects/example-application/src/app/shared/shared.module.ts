import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];
const MATERIAL_MODULES: [] = [];
const SHARED_COMPONENTS: [] = [];
const DIRECTIVES: [] = [];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
  ],
  imports: [
    ...BASE_MODULES,
    ...MATERIAL_MODULES,
    TranslateModule,
    ...DIRECTIVES
  ],
  exports: [
    ...BASE_MODULES,
    ...MATERIAL_MODULES,
    TranslateModule,

    SHARED_COMPONENTS,
    ...DIRECTIVES
  ]
})
export class SharedModule { }
