import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarComponent } from './snack-bar.component';
import { SnackBarService } from './snack-bar.service';

const BASE_MODULE = [CommonModule];
const MATERIAL_MODULE = [MatSnackBarModule, MatButtonModule, MatIconModule];
const COMPONENTS = [SnackBarComponent];
const PROVIDERS = [SnackBarService];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...BASE_MODULE, ...MATERIAL_MODULE],
  exports: [...COMPONENTS, ...MATERIAL_MODULE],
  entryComponents: [...COMPONENTS],
  providers: [
    ...PROVIDERS
  ]
})
export class SnackBarModule { }
