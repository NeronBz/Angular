import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CerezaComponent } from './cereza/cereza.component';
import { FresaComponent } from './fresa/fresa.component';

const routes: Routes = [
  {
    path: 'fresa',
    component: FresaComponent,
  },
  {
    path: 'cereza',
    component: CerezaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrutalRoutingModule {}
