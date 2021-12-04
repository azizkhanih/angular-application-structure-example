import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { DynamicExampleComponent } from './dynamic-example.component';
import { DynamicExampleService } from './dynamic-example.service';

const BASE_MODULES = [CommonModule, RouterModule];
const APP_MODULES = [SharedModule];
const COMPONENTS = [DynamicExampleComponent];

const routes: Routes = [
    { path: '', component: DynamicExampleComponent }
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        RouterModule.forChild(routes),
        ...BASE_MODULES,
        ...APP_MODULES
    ],
    providers: [
        DynamicExampleService
    ]
})
export class DynamicExampleModule { }
