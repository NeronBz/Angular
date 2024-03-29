import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BdComponent } from './bd/bd.component';
import { FhComponent } from './fh/fh.component';
import { LmComponent } from './lm/lm.component';
import { SorComponent } from './sor/sor.component';

const routes: Routes = [
  {
    path: 'bd',
    component: BdComponent,
  },
  {
    path: 'fh',
    component: FhComponent,
  },
  {
    path: 'lm',
    component: LmComponent,
  },
  {
    path: 'sor',
    component: SorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsirRoutingModule {}
