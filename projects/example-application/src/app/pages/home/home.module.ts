import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';

const BASE_MODULES = [CommonModule, RouterModule];
const APP_MODULES = [SharedModule];
const COMPONENTS = [HomeComponent];

const routes: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [
        RouterModule.forChild(routes),
        ...BASE_MODULES,
        ...APP_MODULES
    ],
})
export class HomeModule { }
