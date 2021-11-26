import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { HeaderComponent } from './header.component';

const BASE_MODULES = [CommonModule, RouterModule];
const APP_MODULES = [SharedModule];
const MATERIAL_MODULES = [MatIconModule, MatToolbarModule, MatButtonModule];
const COMPONENTS = [HeaderComponent];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        ...BASE_MODULES,
        ...APP_MODULES,
        ...MATERIAL_MODULES
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class HeaderModule { }
