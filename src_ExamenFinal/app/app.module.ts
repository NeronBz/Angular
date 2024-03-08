import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { Form1Component } from './form1/form1/form1.component';
import { Form2Component } from './form2/form2/form2.component';
import { Input1Component } from './input1/input1/input1.component';
import { CabeceraComponent } from './input1/cabecera/cabecera.component';
import { BodyComponent } from './input1/body/body.component';
import { FooterComponent } from './input1/footer/footer.component';
import { Input2Component } from './input2/input2/input2.component';
import { HijoComponent } from './input2/hijo/hijo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Form1Component,
    Form2Component,
    Input1Component,
    Input2Component,
    HijoComponent,
    CabeceraComponent,
    BodyComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    HttpClientModule,
    MatNativeDateModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
