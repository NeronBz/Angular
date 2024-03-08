import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario: Usuario = new Usuario();
  x: Usuario[] = [];

  constructor(private servicio: ServicioService, private route: Router) {}

  Logear() {
    this.servicio.logearUsuario(this.usuario).subscribe((x) => {
      if (x !== null) {
        alert(x[0].nombre + ' está registrado');
        sessionStorage.setItem('Nombre', x[0].nombre);
        if (x[0].nombre=="admin") {
          this.route.navigate(['/admin']);
        } else {
          this.route.navigate(['/chat']);
        }
      } else {
        alert('El usuario no está registrado');
      }
    });
  }
}
