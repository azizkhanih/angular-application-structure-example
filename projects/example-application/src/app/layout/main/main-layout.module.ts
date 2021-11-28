import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HeaderModule } from '../shared/header/header.module';
import { MainLayoutComponent } from './main-layout.component';

const BASE_MODULES = [CommonModule, RouterModule];
const APP_MODULES = [SharedModule];
const COMPONENTS = [MainLayoutComponent];
const LAYOUT_MODULES = [HeaderModule];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        ...APP_MODULES,
        ...BASE_MODULES,
        ...LAYOUT_MODULES
    ],
    exports: [
        ...APP_MODULES,
        ...LAYOUT_MODULES
    ]
})
export class MainLayoutModule { }
