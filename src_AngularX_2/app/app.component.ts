import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo: string = 'Temporizador';
  hora: string = '';
  minutos: string = '';
  segundos: string = '';
  milisegundos: string = '';
  temp: NodeJS.Timer | undefined;
  constructor() {
    this.temp = setInterval(() => {
      this.hora = new Date().getHours().toString();
      this.minutos = new Date().getMinutes().toString();
      this.segundos = new Date().getSeconds().toString();
      this.milisegundos = new Date().getMilliseconds().toString();
    }, 100);
  }
}
