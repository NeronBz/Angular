import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { ServicioMensajeríaService } from '../servicio-mensajería.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css'],
})
export class MensajesComponent {
  usuarios!: Usuario[];

  constructor(private httpCliente: ServicioMensajeríaService) {}

  user!: Usuario;

  selectedProduct: Usuario = {
    id: 0,
    fecha: '',
    usuario: '',
    mensaje: '',
  };

  crearMSG(form: { value: Usuario }) {
    this.httpCliente
      .crearMensaje(this.selectedProduct)
      .subscribe((usuario: Usuario) => {
        this.user = usuario;
      });
  }
  leerMSG() {
    this.httpCliente.leerMensajes().subscribe((x) => (this.usuarios = x));
  }
}
