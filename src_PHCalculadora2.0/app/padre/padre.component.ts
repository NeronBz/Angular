import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent {
  recibir1(event: any) {
    this.numero1 = event.Num1Aleat;
  }

  recibir2(event: any) {
    this.numero2 = event.Num2Aleat;
    this.operar();
  }

  operar() {
    this.suma = this.numero1 + this.numero2;
    this.resta = this.numero1 - this.numero2;
    this.producto = this.numero1 * this.numero2;
    this.division = this.numero1 / this.numero2;
  }

  suma: number = 0;
  resta: number = 0;
  producto: number = 0;
  division: number = 0;
  numero1: number = 0;
  numero2: number = 0;
}
