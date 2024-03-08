import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable, LOCALE_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class ServicioMensajeríaService {
  constructor(
    private httpCliente: HttpClient,
    @Inject(LOCALE_ID) public locale: string
  ) {}

  leerMensajes(): Observable<Usuario[]> {
    return this.httpCliente.get<Usuario[]>(
      'http://moralo.atwebpages.com/menuAjax/chat/ObtenerMensajes.php'
    );
  }

  crearMensaje(msg: Usuario): Observable<Usuario> {
    msg.fecha = formatDate(Date.now(), 'HH:mm:ss / dd-MM-yy', this.locale);
    console.log(msg)
    return this.httpCliente.post<Usuario>(
      'http://moralo.atwebpages.com/menuAjax/chat/AltaMensaje.php',
      msg
    );
  }
}
