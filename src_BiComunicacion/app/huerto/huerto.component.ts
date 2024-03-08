import { Component } from '@angular/core';

@Component({
  selector: 'app-huerto',
  templateUrl: './huerto.component.html',
  styleUrls: ['./huerto.component.css'],
})
export class HuertoComponent {
  mensajeParaHortaliza: string = '';
  mensajeDeHortaliza: string = '';
  mensajeParaFrutal: string = '';
  mensajeDeFrutal: string = '';
  peticionesSemilla: number = 0;
  peticionesPlantones: number = 0;
}
