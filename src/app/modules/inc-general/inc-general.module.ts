import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogVerComponent } from './components/dialog-ver/dialog-ver.component';
import { DialogEliminarComponent } from './components/dialog-eliminar/dialog-eliminar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { IncGeneralComponent } from './inc-general.component';

@NgModule({
  declarations: [
    IncGeneralComponent,
    DialogVerComponent,
    DialogEliminarComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class IncGeneralModule { }
