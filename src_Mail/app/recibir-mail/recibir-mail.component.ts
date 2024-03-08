import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Correo } from '../correo';
import { ServicioClienteService } from '../servicio-cliente.service';

@Component({
  selector: 'app-recibir-mail',
  templateUrl: './recibir-mail.component.html',
  styleUrls: ['./recibir-mail.component.css'],
})
export class RecibirMailComponent {
  constructor(private httpCliente: ServicioClienteService) {
    this.listarMail();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  nombreUs: string = 'Raul';
  dataSource = new MatTableDataSource<Correo>();
  displayedColumns: string[] = [
    'id',
    'origen',
    'destinatario',
    'asunto',
    'mensaje',
    'fecha',
    'leido',
  ];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  listarMail() {
    this.httpCliente.mostrarTodosMensajes(this.nombreUs).subscribe((x) => {
      this.dataSource.data = x;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
}
