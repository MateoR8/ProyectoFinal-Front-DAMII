import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-eliminar',
  templateUrl: './dialog-eliminar.component.html',
  styleUrls: ['./dialog-eliminar.component.css']
})
export class DialogEliminarComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogEliminarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  cerrar(): void {
    this.dialogRef.close();
  }

}
