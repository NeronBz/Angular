import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CuadroDialogoComponent } from '../cuadro-dialogo/cuadro-dialogo.component';
import { Empleado } from '../empleado';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent {
  abrirDialogo() {
    const dialogo = this.dialogo1.open(CuadroDialogoComponent, {
      data: new Empleado(0, '', '', '', 0, ''),
    });
    dialogo.afterClosed().subscribe((x) => {
      console.log('Hemos abierto el dialogo ' + x);
      if (x != undefined) {
        this.httpCliente
          .insertarEmpleado(x)
          .subscribe((resultado) => this.empleado);
      }
    });
  }

  empleado!: Empleado;

  modificarEmp(emp: Empleado) {
    const dialog2 = this.dialogo1.open(CuadroDialogoComponent, {
      data: new Empleado(
        emp.id,
        emp.nombre,
        emp.direccion,
        emp.cargo,
        emp.edad,
        emp.imagen
      ),
    });
    dialog2.afterClosed();
  }
  eliminarEmp(id: number) {
    if (confirm('Estás seguro de eliminar ' + id + '?')) {
      this.httpCliente.eliminarEmpleado(id).subscribe((x) => {
        alert('Se ha eliminado correctamente');
        this.leerEmpleados();
      });
    } else {
      alert('No eliminas nada');
    }
  }
  dataSource = new MatTableDataSource<Empleado>();

  columnas: string[] = [
    'id',
    'nombre',
    'direccion',
    'cargo',
    'edad',
    'imagen',
    'eliminar',
    'modificar',
  ];

  constructor(
    private httpCliente: ServicioEmpleadoService,
    public dialogo1: MatDialog
  ) {
    this.leerEmpleados();
  }
  leerEmpleados() {
    this.httpCliente.leerEmpleados().subscribe((x) => {
      this.dataSource.data = x;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  @ViewChild(MatTable) tabla1!: MatTable<Empleado>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
