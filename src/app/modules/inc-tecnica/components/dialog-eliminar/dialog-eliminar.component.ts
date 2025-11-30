import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IncTecnicaService } from '../../service/inc-tecnica.service';

@Component({
  selector: 'app-dialog-eliminar',
  templateUrl: './dialog-eliminar.component.html',
  styleUrls: ['./dialog-eliminar.component.css']
})
export class DialogEliminarComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogEliminarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { incidencia: any },
    private service: IncTecnicaService
  ) { }

  cerrar(): void {
    this.dialogRef.close();
  }

  eliminarIncidencia(codigo: String) {
    this.service.eliminarIncidenciaTecnica(codigo).then(
      data => {
        this.dialogRef.close(true);
      },
      err => {
        console.error('Error deleting incidencia', err);
      }
    );
  }

}
