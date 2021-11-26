import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AccountLayoutComponent } from './account/account-layout.component';
import { MainLayoutComponent } from './main/main-layout.component';
import { HeaderModule } from './shared/header/header.module';

const APP_MODULES = [SharedModule];
const LAYOUT_MODULES = [HeaderModule];

@NgModule({
  declarations: [
    MainLayoutComponent,
    AccountLayoutComponent
  ],
  imports: [CommonModule, AppRoutingModule, ...APP_MODULES, ...LAYOUT_MODULES]
})
export class LayoutModule { }
