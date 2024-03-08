import { ElementSchemaRegistry } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular0';
  imagenes = [
    'https://randomuser.me/api/portraits/women/40.jpg',
    'https://randomuser.me/api/portraits/women/41.jpg',
    'https://randomuser.me/api/portraits/women/42.jpg',
    'https://randomuser.me/api/portraits/women/43.jpg',
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/40.jpg',
    'https://randomuser.me/api/portraits/men/41.jpg',
    'https://randomuser.me/api/portraits/men/42.jpg',
    'https://randomuser.me/api/portraits/men/43.jpg',
    'https://randomuser.me/api/portraits/men/44.jpg',
  ];

  indiceImagenSeleccionada: number = 0;
  imagen: string = '';
  ancho: number = 0;
  alto: number = 0;
  auto: boolean = false;
  temporizador: NodeJS.Timeout | undefined;

  constructor() {
    this.indiceImagenSeleccionada = 0;
    this.ancho = 200;
    this.alto = 200;
    this.auto = false;
    this.imagen = this.imagenes[this.indiceImagenSeleccionada];
  }

  anterior() {
    this.indiceImagenSeleccionada--;
    this.imagen = this.imagenes[this.indiceImagenSeleccionada];
  }

  siguiente() {
    this.indiceImagenSeleccionada++;
    if (this.indiceImagenSeleccionada == this.imagenes.length) {
      this.indiceImagenSeleccionada = 0;
    }
    this.imagen = this.imagenes[this.indiceImagenSeleccionada];
  }

  aumentar() {
    if (this.ancho < 1000 && this.alto < 1000) {
      this.ancho += 10;
      this.alto += 10;
    }
  }

  disminuir() {
    if (this.ancho > 0 && this.alto > 0) {
      this.ancho -= 10;
      this.alto -= 10;
    }
  }

  play() {
    if (this.auto) {
    } else {
      this.temporizador = setInterval(() => {
        this.siguiente();
      }, 1000);
    }
  }
}
