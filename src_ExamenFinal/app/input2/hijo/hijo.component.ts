import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css'],
})
export class HijoComponent {
  @Output() devolverNum = new EventEmitter();

  generar() {
    this.devolverNum.emit({ Num: Math.round(Math.random() * 100) });
  }
}
