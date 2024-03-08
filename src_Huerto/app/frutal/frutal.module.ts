import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrutalRoutingModule } from './frutal-routing.module';
import { CerezaComponent } from './cereza/cereza.component';
import { FresaComponent } from './fresa/fresa.component';


@NgModule({
  declarations: [
    CerezaComponent,
    FresaComponent
  ],
  imports: [
    CommonModule,
    FrutalRoutingModule
  ]
})
export class FrutalModule { }
