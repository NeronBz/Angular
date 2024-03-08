import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AromaticasRoutingModule } from './aromaticas-routing.module';
import { VelasComponent } from './velas/velas.component';
import { TornilloComponent } from './tornillo/tornillo.component';
import { RoperoComponent } from './ropero/ropero.component';


@NgModule({
  declarations: [
    VelasComponent,
    TornilloComponent,
    RoperoComponent
  ],
  imports: [
    CommonModule,
    AromaticasRoutingModule
  ]
})
export class AromaticasModule { }
