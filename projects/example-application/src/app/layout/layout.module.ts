import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AccountLayoutModule } from './account/account-layout.module';
import { MainLayoutModule } from './main/main-layout.module';

const APP_MODULES = [SharedModule];
const LAYOUT_MODULES = [MainLayoutModule, AccountLayoutModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, AppRoutingModule, ...APP_MODULES, ...LAYOUT_MODULES]
})
export class LayoutModule { }
