import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Empleado } from './empleado';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'listadoPersonal';
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
  datos: Empleado[] = [];
  urlString: string =
    'http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php';
  dataSource = new MatTableDataSource<Empleado>();

  constructor(private httpCliente: HttpClient) {}
  ngOnInit(): void {
    this.httpCliente.get<Empleado[]>(this.urlString).subscribe((res) => {
      this.dataSource.data = res;
      this.datos = res;
    });
  }
}
