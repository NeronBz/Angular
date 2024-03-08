import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from './chat';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class ServicioAdminService {
  constructor(
    private httpCliente: HttpClient,
    @Inject(LOCALE_ID) public locale: string
  ) {}

  insertarMensaje(mensaje: Chat) {
    let fecha = new Date();
    mensaje.fecha = formatDate(Date.now(), 'HH:mm:ss/dd-MM-yyyy', this.locale);
    return this.httpCliente.post<Chat>(
      'http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php',
      mensaje
    );
  }

  leerMensajes(): Observable<Chat[]> {
    return this.httpCliente.get<Chat[]>(
      'http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes.php'
    );
  }

  leerUsuarios(): Observable<Usuario[]> {
    return this.httpCliente.get<Usuario[]>(
      'http://moralo.atwebpages.com/menuAjax/chat/ObtenerUsuarios.php'
    );
  }

  logearUsuario(user: Usuario): Observable<Usuario[]> {
    return this.httpCliente.get<Usuario[]>(
      'http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?email=' +
        user.email +
        '&pwd=' +
        user.pwd
    );
  }

  bloquearUsuario(user: Usuario) {
    return this.httpCliente.post<Usuario>(
      'http://moralo.atwebpages.com/chat/BloquearUsuario.php?',
      user
    );
  }
  activarUsuario(user: Usuario) {
    return this.httpCliente.post<Usuario>(
      'http://moralo.atwebpages.com/chat/ActivarUsuario.php?',
      user
    );
  }
  bloquearChat(mensaje: Chat) {
    return this.httpCliente.post<Chat>(
      'http://moralo.atwebpages.com/chat/BloquearMensaje.php',
      mensaje
    );
  }
  activarChat(mensaje: Chat) {
    return this.httpCliente.post<Chat>(
      'http://moralo.atwebpages.com/chat/ActivarMensaje.php',
      mensaje
    );
  }
}
