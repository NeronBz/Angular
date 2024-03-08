import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent {
  @Output() devolverNum1 = new EventEmitter();
  @Output() devolverNum2 = new EventEmitter();
  numero1: number = 0;
  numero2: number = 0;
  generar() {
    this.devolverNum1.emit({ Num1Aleat: this.numero1 });
    this.devolverNum2.emit({ Num2Aleat: this.numero2 });
  }
}
