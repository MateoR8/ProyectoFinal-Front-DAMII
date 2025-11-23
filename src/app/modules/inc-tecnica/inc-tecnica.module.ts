import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogEliminarComponent } from './components/dialog-eliminar/dialog-eliminar.component';
import { DialogVerComponent } from './components/dialog-ver/dialog-ver.component';



@NgModule({
  declarations: [
    DialogEliminarComponent,
    DialogVerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IncTecnicaModule { }
