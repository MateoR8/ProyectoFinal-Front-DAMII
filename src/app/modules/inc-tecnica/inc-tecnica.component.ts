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
      this.incidenciasTecnica = data.sort((a, b) => {
        const numA = Number(a.codigoIncidencia.split('-')[1]);
        const numB = Number(b.codigoIncidencia.split('-')[1]);
        return numA - numB;
      }).map(inc => ({
        ... inc,
        duracionMinutos : this.calcularDuracion(inc.fechaCreacion, inc.fechaFinalizacion)
      }));
    });
  }

  calcularDuracion(fechaInicio: string, fechaFin: string): string {
    if (!fechaFin) return 'Aún no finaliza';
    const inicio = this.parseFecha(fechaInicio);
    const fin = this.parseFecha(fechaFin);
    if (!inicio || !fin) return 'Formato de fecha inválido';
    const diffMs = fin.getTime() - inicio.getTime();
    const diffMin = Math.round(diffMs / 60000);

    return `${diffMin} min`;
  }

  parseFecha(fechaStr: string | undefined | null): Date | null {
    if (!fechaStr) return null;
    const partes = fechaStr.split(' ');
    if (partes.length !== 2) return null;
    const [fechaPart, horaPart] = partes;
    const fechaNums = fechaPart.split('/').map(Number);
    const horaNums = horaPart.split(':').map(Number);
    if (fechaNums.length !== 3 || horaNums.length !== 2) return null;
    const [dd, mm, yyyy] = fechaNums;
    const [hh, min] = horaNums;
    return new Date(yyyy, mm - 1, dd, hh, min);
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
