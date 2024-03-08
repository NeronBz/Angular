import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chat } from '../chat';
import { ServicioChatService } from '../servicio-chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  //objeto
  miParametro!: string;
  msjchat: Chat = {
    id: 0,
    usuario: '',
    fecha: '',
    mensaje: '',
  };
  listaMensajes: Chat[] = [];
  //No poner nada de navegación entre login-registro-chat (enrutamiento)
  //solo quiero llenar listaMensajes
  constructor(
    private route: ActivatedRoute,
    private servicio: ServicioChatService
  ) {
    //parte de enrutamiento
    this.LeerMensajes();
  }
  LeerMensajes() {
    this.servicio.leerMensajes().subscribe((msg: Chat[]) => {
      this.listaMensajes = msg;
    });
  }
  InsertarMensaje() {
    //this.servicio.insertarMensaje(this.mensaje.subscribe((x:Chat)=>{this.mensaje=x;
    //this.LeerMensajes();})
    this.msjchat.usuario = this.miParametro;
    if (sessionStorage.getItem('Nombre') == this.miParametro) {
      // this.servicio.insertarMensaje(this.)
    }
  }
}
