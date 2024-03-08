import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Persona } from '../persona';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ServicioPersonalService } from '../servicio-personal.service';

@Component({
  selector: 'app-tabla-p',
  templateUrl: './tabla-p.component.html',
  styleUrls: ['./tabla-p.component.css'],
})
export class TablaPComponent {
  applyFilter(event: KeyboardEvent) {}
  datasource = new MatTableDataSource<Persona>();
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatPaginator, { static: true })
  sort!: MatSort;
  constructor(private httpCliente: ServicioPersonalService) {}
  datos: Persona[] = [];
  columnas: string[] = [
    'id',
    'nombre',
    'direccion',
    'cargo',
    'edad',
    'imagen',
    'borrar',
    'modificar',
  ];
}
