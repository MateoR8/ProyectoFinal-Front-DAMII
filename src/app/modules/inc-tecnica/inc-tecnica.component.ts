import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogVerComponent } from './components/dialog-ver/dialog-ver.component';
import { DialogEliminarComponent } from './components/dialog-eliminar/dialog-eliminar.component';

@Component({
  selector: 'app-inc-tecnica',
  templateUrl: './inc-tecnica.component.html',
  styleUrl: './inc-tecnica.component.css'
})
export class IncTecnicaComponent {
  constructor(private dialog: MatDialog) { }

  abrirVisualizar() {
    const dialogRef = this.dialog.open(DialogVerComponent, {
      width: '600px',
      panelClass: 'custom-dialog',
      data: {}
    });
  }

  abrirEliminar() {
    const dialogRef = this.dialog.open(DialogEliminarComponent, {
      width: '600px',
      panelClass: 'custom-dialog',
      data: {}
    });
  }
}
