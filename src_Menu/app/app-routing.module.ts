import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtrosisComponent } from './artrosis/artrosis.component';
import { BrecolComponent } from './brecol/brecol.component';
import { ColiflorComponent } from './coliflor/coliflor.component';
import { FerreroRocherComponent } from './ferrero-rocher/ferrero-rocher.component';

const routes: Routes = [
  {
    path:'brecol',
    component:BrecolComponent
  },
  {
    path:'coliflor',
    component:ColiflorComponent
  },
  {
    path:'ferrero-rocher',
    component:FerreroRocherComponent
  },
  {
    path:'artrosis',
    component:ArtrosisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
