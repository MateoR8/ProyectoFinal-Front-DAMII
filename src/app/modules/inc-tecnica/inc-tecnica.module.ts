import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogEliminarComponent } from './components/dialog-eliminar/dialog-eliminar.component';
import { DialogVerComponent } from './components/dialog-ver/dialog-ver.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncTecnicaComponent } from './inc-tecnica.component';



@NgModule({
  declarations: [
    IncTecnicaComponent,
    DialogEliminarComponent,
    DialogVerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IncTecnicaModule { }
