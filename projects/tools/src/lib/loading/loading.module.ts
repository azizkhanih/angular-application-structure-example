import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingComponent } from "./loading.component";

const BASE_MODULES = [CommonModule];
const COMPONENTS = [LoadingComponent];

//Main Lib: https://www.npmjs.com/package/ngx-loading
@NgModule({
  declarations: [...COMPONENTS],
  imports: [...BASE_MODULES],
  exports: [...BASE_MODULES, ...COMPONENTS],
})
export class LoadingModule { }
