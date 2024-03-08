import { Component } from '@angular/core';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css'],
})
export class Componente4Component {
  primero: string = '';
  resultado: string = '';
  arrayR: Array<String> = [];

  anadir(inp: String, inp2: HTMLInputElement) {
    this.arrayR.push(inp);
    inp2.value = '';
  }
}
