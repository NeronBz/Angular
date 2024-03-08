import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ChatAdminComponent } from './chat-admin/chat-admin.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { NavMaterialComponent } from './nav-material/nav-material.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuariosAdminComponent } from './usuarios-admin/usuarios-admin.component';

const routes: Routes = [
  {
    path: 'usuarios-admin',
    component: UsuariosAdminComponent,
  },
  {
    path: 'chat-admin',
    component: ChatAdminComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'nav-material',
    component: NavMaterialComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
