import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsirComponent } from './asir/asir.component';
import { DamComponent } from './dam/dam.component';
import { DawComponent } from './daw/daw.component';

const routes: Routes = [
  {
    path: 'asir',
    component: AsirComponent,
  },
  {
    path: 'dam',
    component: DamComponent,
  },
  {
    path: 'daw',
    component: DawComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
