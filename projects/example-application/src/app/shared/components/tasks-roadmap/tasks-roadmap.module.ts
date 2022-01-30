import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicFieldBuilderComponent } from './dynamic-field-builder/dynamic-field-builder.component';
import { DynamicFormBuilderComponent } from './dynamic-form-builder/dynamic-form-builder.component';
import { DynamicFieldBuilderControlService } from './shared/dynamic-form-control.service';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];
const COMPONENTS = [DynamicFormBuilderComponent, DynamicFieldBuilderComponent];
const VENDORS_MODULES = [TranslateModule];
const MATERIAL_MODULES = [MatIconModule, MatButtonModule];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        ...BASE_MODULES,
        ...VENDORS_MODULES,
        ...MATERIAL_MODULES
    ],
    exports: [
        ...COMPONENTS,
        ...MATERIAL_MODULES
    ],
    providers: [
        DynamicFieldBuilderControlService
    ]
})
export class DynamicFormModule { }
