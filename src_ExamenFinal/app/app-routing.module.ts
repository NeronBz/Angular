import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from './form1/form1/form1.component';
import { Form2Component } from './form2/form2/form2.component';
import { Input1Component } from './input1/input1/input1.component';
import { Input2Component } from './input2/input2/input2.component';

const routes: Routes = [
  {
    path: 'form1',
    component: Form1Component,
    loadChildren: () =>
      import('./form1/form1.module').then((m) => m.Form1Module),
  },
  {
    path: 'form2',
    component: Form2Component,
    loadChildren: () =>
      import('./form2/form2.module').then((m) => m.Form2Module),
  },
  {
    path: 'input1',
    component: Input1Component,
    loadChildren: () =>
      import('./input1/input1.module').then((m) => m.Input1Module),
  },
  {
    path: 'input2',
    component: Input2Component,
    loadChildren: () =>
      import('./input2/input2.module').then((m) => m.Input2Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
