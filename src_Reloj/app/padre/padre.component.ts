import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent {
  decimasT: number = 0;
  segundosT: number = 0;
  minutosT: number = 0;
  horasT: number = 0;

  actualizarD(event: any) {
    this.decimasT = event.dec;
  }
  actualizarS(event: any) {
    this.segundosT = event.seg;
  }
  actualizarM(event: any) {
    this.minutosT = event.min;
  }
  actualizarH(event: any) {
    this.horasT = event.hor;
  }
}
