import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent implements OnInit {
  segundos: number = 0;
  minutos: number = 0;
  horas: number = 0;
  @Input() decimasT: number = 0;
  @Output() contardecimas = new EventEmitter();
  @Output() contarsegundos = new EventEmitter();
  @Output() contarminutos = new EventEmitter();
  @Output() contarhoras = new EventEmitter();

  ngOnInit(): void {
    this.segundos = this.decimasT;
    this.minutos = this.decimasT;
    this.horas = this.decimasT;
    setInterval(() => {
      this.contardecimas.emit({ dec: this.decimasT });
      this.decimasT++;
      if (this.decimasT == 10) {
        this.segundos++;
        this.decimasT = 0;
        this.contarsegundos.emit({ seg: this.segundos });
      }
      if (this.segundos == 59 + 1) {
        this.segundos = 0;
        this.minutos++;
        this.contarminutos.emit({ min: this.minutos });
      }
      if (this.minutos == 59 + 1) {
        this.minutos = 0;
        this.horas++;
        this.contarhoras.emit({ hor: this.horas });
      }
    }, 100);
  }
}
