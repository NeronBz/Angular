import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css'],
})
export class Componente2Component {
  auto: boolean = false;
  temporizador: NodeJS.Timeout | undefined;
  numero: number = 0;

  play(b1: HTMLButtonElement) {
    if (this.auto) {
    } else {
      this.temporizador = setInterval(() => {
        b1.textContent = String(this.numero);
        this.numero++;
      }, 1000);
    }
  }

  parar(b2: HTMLButtonElement) {
    clearInterval(this.temporizador);
    b2.style.backgroundColor = 'green';
    b2.disabled;
  }

  reanudar(b1: HTMLButtonElement, b3: HTMLButtonElement) {
    this.play(b1);
    b3.style.backgroundColor = 'green';
    b3.disabled;
    b1.disabled;
  }
}
