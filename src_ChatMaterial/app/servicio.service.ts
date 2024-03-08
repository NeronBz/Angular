import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { Chat } from './chat';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
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
      'http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes2.php'
    );
  }
  constructor(
    private httpCliente: HttpClient,
    @Inject(LOCALE_ID) public locale: string
  ) {}
  registrarUsuario(us: Usuario): Observable<Usuario> {
    console.log('registrar servicio: ' + us.pwd);
    return this.httpCliente.post<Usuario>(
      'http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php',
      us
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
}
