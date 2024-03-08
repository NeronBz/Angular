import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit {
  ngOnInit(): void {
    this.cargar();
  }
  @Input() numeroRandom1 = 0;
  @Input() numeroRandom2 = 0;
  @Output() suma = new EventEmitter();
  @Output() resta = new EventEmitter();
  @Output() multiplicacion = new EventEmitter();
  @Output() division = new EventEmitter();

  resultadoS: number = 0;
  resultadoR: number = 0;
  resultadoM: number = 0;
  resultadoD: number = 0;
  cargar() {
    this.resultadoS = this.numeroRandom1 + this.numeroRandom2;
    this.suma.emit({ resultSuma: this.resultadoS });
    this.resultadoR = this.numeroRandom1 - this.numeroRandom2;
    this.resta.emit({ resultResta: this.resultadoR });
    this.resultadoM = this.numeroRandom1 * this.numeroRandom2;
    this.multiplicacion.emit({ resultMultiplicacion: this.resultadoM });
    this.resultadoD = this.numeroRandom1 / this.numeroRandom2;
    this.division.emit({ resultDivision: this.resultadoD });
  }
}
