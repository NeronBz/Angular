import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cargarClasePrincipal(event: Event) {
    this.claseRecibida = event.class;
  }
  title = 'ngClass';
  clase: string = '';
  claseRecibida: string = '';
}
