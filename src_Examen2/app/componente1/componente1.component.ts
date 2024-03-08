import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css'],
})
export class Componente1Component {
  nBoton: number = 0;
  evento1(
    b1: HTMLButtonElement,
    b2: HTMLButtonElement,
    b3: HTMLButtonElement,
    b4: HTMLButtonElement
  ) {
    b1.style.backgroundColor = 'yellow';
    b2.style.backgroundColor = 'yellow';
    b3.style.backgroundColor = 'yellow';
    b4.style.backgroundColor = 'yellow';
  }
  evento2(
    b1: HTMLButtonElement,
    b2: HTMLButtonElement,
    b3: HTMLButtonElement,
    b4: HTMLButtonElement
  ) {
    b1.style.backgroundColor = 'red';
    b2.style.backgroundColor = 'red';
    b3.style.backgroundColor = 'red';
    b4.style.backgroundColor = 'red';
  }
  evento3(
    b1: HTMLButtonElement,
    b2: HTMLButtonElement,
    b3: HTMLButtonElement,
    b4: HTMLButtonElement
  ) {
    b1.style.backgroundColor = 'green';
    b2.style.backgroundColor = 'green';
    b3.style.backgroundColor = 'green';
    b4.style.backgroundColor = 'green';
  }
  evento4(
    b1: HTMLButtonElement,
    b2: HTMLButtonElement,
    b3: HTMLButtonElement,
    b4: HTMLButtonElement
  ) {
    b1.style.backgroundColor = 'grey';
    b2.style.backgroundColor = 'grey';
    b3.style.backgroundColor = 'grey';
    b4.style.backgroundColor = 'grey';
  }
}
