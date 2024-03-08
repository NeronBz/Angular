import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaPComponent } from './tabla-p/tabla-p.component';
import { CuadroDialogoInsComponent } from './cuadro-dialogo-ins/cuadro-dialogo-ins.component';
import { CuadroDialogoPreguntaComponent } from './cuadro-dialogo-pregunta/cuadro-dialogo-pregunta.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    TablaPComponent,
    CuadroDialogoInsComponent,
    CuadroDialogoPreguntaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
