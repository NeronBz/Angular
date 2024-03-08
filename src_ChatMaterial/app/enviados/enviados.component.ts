import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ChatPrivado } from '../chat-privado';
import { ServicioPrivadoService } from '../servicio-privado.service';

@Component({
  selector: 'app-enviados',
  templateUrl: './enviados.component.html',
  styleUrls: ['./enviados.component.css'],
})
export class EnviadosComponent {
  @ViewChild(MatTable) tabla!: MatTable<ChatPrivado>;
  @ViewChild(MatPaginator) paginador!: MatPaginator;
  @ViewChild(MatSort) ordenacion!: MatSort;

  dataSource = new MatTableDataSource<ChatPrivado>();
  displayedColumns: string[] = [
    'id',
    'usuario',
    'destinatario',
    'mensaje',
    'fecha',
    'activo',
  ];
  listaMensajes: ChatPrivado[] = [];
  msjchat: ChatPrivado = {
    id: 0,
    usuario: '',
    destinatario: '',
    mensaje: '',
    fecha: '',
    activo: 1,
  };

  constructor(
    private httpCliente: ServicioPrivadoService,
    private route: Router,
    private servicio: ServicioPrivadoService
  ) {}

  ngOnInit() {
    this.leerMensajes();
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  leerMensajes() {
    this.servicio.leerMensajes().subscribe((chat: ChatPrivado[]) => {
      this.listaMensajes = chat;
      this.dataSource = new MatTableDataSource<ChatPrivado>(this.listaMensajes);
      this.dataSource.paginator = this.paginador;
      this.dataSource.sort = this.ordenacion;
    });
  }
}
