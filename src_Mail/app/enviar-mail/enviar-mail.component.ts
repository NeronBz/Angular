import { Component } from '@angular/core';
import { Correo } from '../correo';
import { ServicioClienteService } from '../servicio-cliente.service';

@Component({
  selector: 'app-enviar-mail',
  templateUrl: './enviar-mail.component.html',
  styleUrls: ['./enviar-mail.component.css'],
})
export class EnviarMailComponent {
  usuario: string = 'Raul';
  mail: Correo = {
    id: 0,
    origen: this.usuario,
    destinatario: '',
    asunto: '',
    mensaje: '',
    fecha: new Date().toString(),
    leido: 0,
  };

  constructor(private httpCliente: ServicioClienteService) {}
  enviar() {
    this.mail.origen = this.usuario;
    this.httpCliente.escribirMensaje(this.mail).subscribe(() => {
      alert('Mensaje Enviado');
      this.mail = new Correo(0, '', '', '', '', '', 0);
    });
  }
}
