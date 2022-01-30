import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { DynamicFormExampleComponent } from './dynamic-form-example.component';
import { DynamicFormExampleService } from './dynamic-form-example.service';

const BASE_MODULES = [CommonModule, RouterModule];
const APP_MODULES = [SharedModule];
const COMPONENTS = [DynamicFormExampleComponent];

const routes: Routes = [
    { path: '', component: DynamicFormExampleComponent }
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        RouterModule.forChild(routes),
        ...BASE_MODULES,
        ...APP_MODULES
    ],
    providers: [
        DynamicFormExampleService
    ]
})
export class DynamicFormExampleModule { }
