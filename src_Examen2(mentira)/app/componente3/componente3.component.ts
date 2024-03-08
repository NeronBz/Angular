import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css'],
})
export class Componente3Component {
  nRandom: number = 0;
  imagen: string = '';

  numRan(b1: HTMLButtonElement, im: HTMLImageElement) {
    this.nRandom = Math.round(Math.random() * 100);
    this.imagen =
      'https://randomuser.me/api/portraits/women/' + this.nRandom + '.jpg';
    im.setAttribute('src', this.imagen);
  }
}
