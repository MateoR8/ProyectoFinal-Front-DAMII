import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogVerComponent } from './components/dialog-ver/dialog-ver.component';
import { DialogEliminarComponent } from './components/dialog-eliminar/dialog-eliminar.component';
import { IncTecnicaService } from './service/inc-tecnica.service';

@Component({
  selector: 'app-inc-tecnica',
  templateUrl: './inc-tecnica.component.html',
  styleUrls: ['./inc-tecnica.component.css']
})
export class IncTecnicaComponent implements OnInit {
  incidenciasTecnica: any[] = [];
  
  constructor(private dialog: MatDialog, private service: IncTecnicaService) { }

  ngOnInit(): void {
    this.service.getIncTecnicaData().subscribe(data => {
      this.incidenciasTecnica = data;
      console.log(this.incidenciasTecnica);
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
