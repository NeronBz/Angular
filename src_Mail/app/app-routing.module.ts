import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnviadosComponent } from './enviados/enviados.component';
import { EnviarMailComponent } from './enviar-mail/enviar-mail.component';
import { NoLeidosComponent } from './no-leidos/no-leidos.component';
import { RecibirMailComponent } from './recibir-mail/recibir-mail.component';

const routes: Routes = [
  {
    path: 'enviados',
    component: EnviadosComponent,
  },
  {
    path: 'noLeidos',
    component: NoLeidosComponent,
  },
  {
    path: 'recibirMail',
    component: RecibirMailComponent,
  },
  {
    path: 'enviarMail',
    component: EnviarMailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
