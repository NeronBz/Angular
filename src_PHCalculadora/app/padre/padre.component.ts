import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent {
  num1!: number;
  num2!: number;
  constructor() {
    this.num1 = Math.floor(Math.random() * 100);
    this.num2 = Math.floor(Math.random() * 100);
  }
  resultadoSuma: number = 0;
  resultadoResta: number = 0;
  resultadoMultiplicacion: number = 0;
  resultadoDivision: number = 0;
  dividir(event: any) {
    this.resultadoDivision = event.resultDivision;
  }
  multiplicar(event: any) {
    this.resultadoMultiplicacion = event.resultMultiplicacion;
  }
  restar(event: any) {
    this.resultadoResta = event.resultResta;
  }
  sumar(event: any) {
    this.resultadoSuma = event.resultSuma;
  }
  generar() {
    window.location.reload();
  }
}
