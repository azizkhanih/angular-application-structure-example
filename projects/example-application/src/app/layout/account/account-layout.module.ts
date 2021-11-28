import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AccountLayoutComponent } from './account-layout.component';

const BASE_MODULES = [CommonModule, RouterModule];
const APP_MODULES = [SharedModule];
const COMPONENTS = [AccountLayoutComponent];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        ...APP_MODULES,
        ...BASE_MODULES
    ],
    exports: [
        ...APP_MODULES,
    ]
})
export class AccountLayoutModule { }
