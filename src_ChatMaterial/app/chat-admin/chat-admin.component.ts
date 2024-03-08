import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServicioAdminService } from '../servicio-admin.service';
import { Chat } from '../chat';

@Component({
  selector: 'app-chat-admin',
  templateUrl: './chat-admin.component.html',
  styleUrls: ['./chat-admin.component.css'],
})
export class ChatAdminComponent {
  @ViewChild(MatTable) tabla!: MatTable<Chat>;
  @ViewChild(MatPaginator) paginador!: MatPaginator;
  @ViewChild(MatSort) ordenacion!: MatSort;

  dataSource = new MatTableDataSource<Chat>();
  displayedColumns: string[] = [
    'id',
    'usuario',
    'mensaje',
    'fecha',
    'activo',
    'bloquear',
    'activar',
  ];
  listaMensajes: Chat[] = [];
  msjchat: Chat = {
    id: 0,
    usuario: '',
    mensaje: '',
    fecha: '',
    activo: 1,
  };

  constructor(
    private httpCliente: ServicioAdminService,
    private route: Router,
    private servicio: ServicioAdminService
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
    this.servicio.leerMensajes().subscribe((chat: Chat[]) => {
      this.listaMensajes = chat;
      this.dataSource = new MatTableDataSource<Chat>(this.listaMensajes);
      this.dataSource.paginator = this.paginador;
      this.dataSource.sort = this.ordenacion;
    });
  }

  bloquearChat(chat: Chat) {
    this.servicio.bloquearChat(chat).subscribe((msj: Chat) => {
      chat.activo = 0;
    });
  }

  activarChat(chat: Chat) {
    this.servicio.activarChat(chat).subscribe((msj: Chat) => {
      chat.activo = 1;
    });
  }

  cerrarSesion() {
    sessionStorage.removeItem('Nombre');
    this.dataSource = new MatTableDataSource<Chat>();
    this.route.navigate(['/login']);
  }
}
