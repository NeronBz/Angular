import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WalddyComponent } from './walddy/walddy.component';
import { RaulComponent } from './raul/raul.component';
import { AlvaroComponent } from './alvaro/alvaro.component';

@NgModule({
  declarations: [
    AppComponent,
    WalddyComponent,
    RaulComponent,
    AlvaroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
