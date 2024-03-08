import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Chat } from '../chat';
import { ServicioService } from '../servicio.service';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements AfterViewInit{
  @ViewChild(MatTable) tabla!: MatTable<Chat>;
  @ViewChild(MatPaginator) paginador!: MatPaginator;
  @ViewChild(MatSort) ordenacion!: MatSort;

  dataSource = new MatTableDataSource<Chat>();
  displayedColumns: string[] = ['id', 'usuario', 'mensaje', 'fecha'];
  listaMensajes: Chat[] = [];
  nombre = sessionStorage.getItem('Nombre');
  msjchat: Chat = {
    id: 0,
    usuario: '',
    mensaje: '',
    fecha: '',
    activo: 1,
  };

  constructor(
    private httpCliente: ServicioService,
    private route: Router,
    private servicio: ServicioService
  ) {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginador;
    this.dataSource.sort = this.ordenacion;
  }

  ngOnInit(): void {
    this.leerMensajes();
    this.dataSource.paginator = this.paginador;
    this.dataSource.sort = this.ordenacion;
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  insertarMensaje() {
    if (this.nombre != null) {
      this.msjchat.usuario = this.nombre;
      this.servicio.insertarMensaje(this.msjchat).subscribe(() => {
        this.leerMensajes();
        this.msjchat.mensaje = '';
      });
    }
  }

  leerMensajes() {
    this.servicio.leerMensajes().subscribe((chat: Chat[]) => {
      this.listaMensajes = chat;
      this.dataSource.data = this.listaMensajes;
    });
  }
  cerrarSesion() {
    sessionStorage.removeItem('Nombre');
    this.dataSource = new MatTableDataSource<Chat>();
    this.route.navigate(['/login']);
  }
}
