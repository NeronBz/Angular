import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMaterialComponent } from './nav-material/nav-material.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ChatAdminComponent } from './chat-admin/chat-admin.component';
import { UsuariosAdminComponent } from './usuarios-admin/usuarios-admin.component';
import { PrivadoComponent } from './privado/privado.component';
import { RecibidosComponent } from './recibidos/recibidos.component';
import { EnviadosComponent } from './enviados/enviados.component';
@NgModule({
  declarations: [
    AppComponent,
    NavMaterialComponent,
    ChatComponent,
    LoginComponent,
    RegistroComponent,
    AdminComponent,
    ChatAdminComponent,
    UsuariosAdminComponent,
    PrivadoComponent,
    RecibidosComponent,
    EnviadosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
