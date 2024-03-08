import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular0';
  numero:number=Math.round(Math.random()*100);
  usuario:string="Raúl Blázquez";
}
