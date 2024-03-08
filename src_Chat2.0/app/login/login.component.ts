import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServicioChatService } from '../servicio-chat.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private servicio: ServicioChatService) {}
  Logear(us: Usuario) {
    let obtenido: Usuario=new Usuario();
    this.servicio.logearUsuario
  }
}
