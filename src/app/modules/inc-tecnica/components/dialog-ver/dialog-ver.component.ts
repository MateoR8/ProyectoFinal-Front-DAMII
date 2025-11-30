import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-ver',
  templateUrl: './dialog-ver.component.html',
  styleUrls: ['./dialog-ver.component.css']
})
export class DialogVerComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogVerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {incidencia: any}
  ) { }

  cerrar(): void {
    this.dialogRef.close();
  }
}
