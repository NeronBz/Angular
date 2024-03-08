import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto3';
  ciclo:String="DAW";
  nombreUsuario:string="";
  cambiarNombre(){
this.ciclo="Desarrollo de aplicaciones web";
  }
  retornarNombre(){
this.ciclo="DAW";
  }
  guardarNombre(nombre:string){
this.nombreUsuario=nombre.toUpperCase();
  }
}
