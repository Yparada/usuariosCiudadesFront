import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';
import { BarraComponent } from './barra/barra.component';
import { TablaService } from './services/tabla.service';
import { HttpClientModule } from '@angular/common/http';
import { CartaComponent } from './carta/carta.component';
import { DatoService } from './services/dato.service';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    BarraComponent,
    CartaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TablaService, DatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
