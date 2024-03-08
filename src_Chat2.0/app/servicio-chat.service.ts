import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import { Chat } from './chat';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ServicioChatService {
  insertarMensaje(mensaje: Chat) {
    let fecha = new Date();
    mensaje.fecha = formatDate(fecha, 'HH:mm:ss/dd-mm-yyyy', this.locale);
    return this.httpCliente.put<Chat>(
      'http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php',
      mensaje
    );
  }
  leerMensajes(): Observable<Chat[]> {
    return this.httpCliente.get<Chat[]>(
      'http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes.php'
    );
  }
  constructor(
    private httpCliente: HttpClient,
    @Inject(LOCALE_ID) public locale: string
  ) {}
  obtenerMensajes() {
    this.httpCliente.get(
      'http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes.php'
    );
  }
  altaMensaje(msg: Chat) {
    this.httpCliente.post;
  }
  registrarUsuario(us: Usuario): Observable<Usuario> {
    console.log('registrar servicio: ' + us.pwd);
    return this.httpCliente.post<Usuario>(
      'http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php',
      us
    );
  }
  logearUsuario(user: Usuario): Observable<Usuario> {
    return this.httpCliente.get<Usuario>(
      'http://moralo.atwebpages.com/menuAjax/chat/SeleccionarUsuario.php?email=' +
        user.email +
        '&pwd=' +
        user.pwd
    );
  }
}
