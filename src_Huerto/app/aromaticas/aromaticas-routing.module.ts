import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoperoComponent } from './ropero/ropero.component';
import { TornilloComponent } from './tornillo/tornillo.component';
import { VelasComponent } from './velas/velas.component';

const routes: Routes = [
  {
    path: 'ropero',
    component: RoperoComponent,
  },
  {
    path: 'tornillo',
    component: TornilloComponent,
  },
  {
    path: 'velas',
    component: VelasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AromaticasRoutingModule {}
