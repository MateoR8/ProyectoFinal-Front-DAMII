import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-ver',
  templateUrl: './dialog-ver.component.html',
  styleUrl: './dialog-ver.component.css'
})
export class DialogVerComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogVerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  cerrar(): void {
    this.dialogRef.close();
  }

}
