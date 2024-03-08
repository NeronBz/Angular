import { Component } from '@angular/core';

@Component({
  selector: 'app-input2',
  templateUrl: './input2.component.html',
  styleUrls: ['./input2.component.css'],
})
export class Input2Component {
  cadena: string = '';
  recibir(event: any) {
    this.cadena =
      'https://randomuser.me/api/portraits/men/' + event.Num + '.jpg';
  }
}
