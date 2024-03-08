import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServicioAdminService } from '../servicio-admin.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuarios-admin',
  templateUrl: './usuarios-admin.component.html',
  styleUrls: ['./usuarios-admin.component.css'],
})
export class UsuariosAdminComponent {
  @ViewChild(MatTable) tabla!: MatTable<Usuario>;
  @ViewChild(MatPaginator) paginador!: MatPaginator;
  @ViewChild(MatSort) ordenacion!: MatSort;

  dataSource = new MatTableDataSource<Usuario>();
  displayedColumns: string[] = [
    'id',
    'nombre',
    'email',
    'activo',
    'bloquear',
    'activar',
  ];
  listaUsuarios: Usuario[] = [];

  nombre = sessionStorage.getItem('Nombre');
  user: Usuario = {
    id: 0,
    nombre: '',
    email: '',
    pwd: '',
    activo: 1,
  };

  constructor(
    private httpCliente: ServicioAdminService,
    private route: Router,
    private servicio: ServicioAdminService
  ) {}

  ngOnInit() {
    this.leerUsuarios();
  }

  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  leerUsuarios() {
    this.servicio.leerUsuarios().subscribe((user: Usuario[]) => {
      this.listaUsuarios = user;
      this.dataSource = new MatTableDataSource<Usuario>(this.listaUsuarios);
      this.dataSource.paginator = this.paginador;
      this.dataSource.sort = this.ordenacion;
    });
  }

  bloquearUsuario(user: Usuario) {
    this.servicio.bloquearUsuario(user).subscribe((usuario: Usuario) => {
      user.activo = 0;
    });
  }

  activarUsuario(user: Usuario) {
    this.servicio.activarUsuario(user).subscribe((usuario: Usuario) => {
      user.activo = 1;
    });
  }

  cerrarSesion() {
    sessionStorage.removeItem('Nombre');
    this.dataSource = new MatTableDataSource<Usuario>();
    this.route.navigate(['/login']);
  }
}
