import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatPrivado } from './chat-privado';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class ServicioPrivadoService {
  constructor(
    private httpCliente: HttpClient,
    @Inject(LOCALE_ID) public locale: string
  ) {}

  insertarMensaje(mensaje: ChatPrivado) {
    mensaje.fecha = formatDate(Date.now(), 'HH:mm:ss/dd-MM-yyyy', this.locale);
    return this.httpCliente.post<ChatPrivado>(
      'http://moralo.atwebpages.com/menuAjax/chat/AltaMensajeP.php',
      mensaje
    );
  }

  leerMensajesEnviados(nombre: string): Observable<ChatPrivado[]> {
    return this.httpCliente.get<ChatPrivado[]>(
      'http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajesE.php?usuario=' +
        nombre
    );
  }

  leerMensajesRecibidos(nombre: string): Observable<ChatPrivado[]> {
    return this.httpCliente.get<ChatPrivado[]>(
      'http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajesP.php?usuario=' +
        nombre
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
