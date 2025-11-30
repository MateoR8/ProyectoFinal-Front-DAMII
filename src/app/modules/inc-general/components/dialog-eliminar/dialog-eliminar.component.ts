import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IncGeneralService } from '../../service/inc-general.service';

@Component({
  selector: 'app-dialog-eliminar',
  templateUrl: './dialog-eliminar.component.html',
  styleUrls: ['./dialog-eliminar.component.css']
})
export class DialogEliminarComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogEliminarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {incidencia : any},
    private service: IncGeneralService
  ) { }

  eliminarIncidencia(codigo: String){
    this.service.eliminarIncidenciaGeneral(codigo).then(
      data => {
        this.dialogRef.close(true);
      },
      err => {
        console.error('Error deleting incidencia', err);
      }
    );
  }

  cerrar(): void {
    this.dialogRef.close();
  }

}
