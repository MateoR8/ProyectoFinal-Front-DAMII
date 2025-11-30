import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogVerComponent } from './components/dialog-ver/dialog-ver.component';
import { DialogEliminarComponent } from './components/dialog-eliminar/dialog-eliminar.component';
import { IncGeneralService } from './service/inc-general.service';

@Component({
  selector: 'app-inc-general',
  templateUrl: './inc-general.component.html',
  styleUrls: ['./inc-general.component.css']
})
export class IncGeneralComponent implements OnInit {
  incidenciasGeneral: any[] = [];

  constructor(private dialog: MatDialog, private service: IncGeneralService) { }

  ngOnInit(): void {
    this.service.getIncGeneralData().subscribe(data => {
      this.incidenciasGeneral = data;
      console.log(this.incidenciasGeneral);
    });
  }

  abrirVisualizar(incidencia: any) {
    const dialogRef = this.dialog.open(DialogVerComponent, {
      width: '600px',
      panelClass: 'custom-dialog',
      data: { incidencia: incidencia }
    });
  }

  abrirEliminar(incidencia: any) {
    const dialogRef = this.dialog.open(DialogEliminarComponent, {
      width: '600px',
      panelClass: 'custom-dialog',
      data: { incidencia: incidencia }
    });
  }
}
