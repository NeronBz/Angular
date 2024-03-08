import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'P3';
  numero:number=0;
  pNumero:string="Sumar 1";
  sNumero:string="Restar 1";

  aumentar(){
this.numero++;
  }

  restar(){
    this.numero--;
  }
}
