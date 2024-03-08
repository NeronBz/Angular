import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Input1RoutingModule } from './input1-routing.module';
import { HuertoComponent } from './huerto/huerto.component';
import { HortalizaComponent } from './hortaliza/hortaliza.component';
import { FrutalComponent } from './frutal/frutal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HuertoComponent, HortalizaComponent, FrutalComponent],
  imports: [CommonModule, Input1RoutingModule, FormsModule],
})
export class Input1Module {}
