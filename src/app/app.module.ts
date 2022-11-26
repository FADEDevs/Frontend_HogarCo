import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './plantilla/barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from './plantilla/pie-pagina/pie-pagina.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';
import {HttpClientModule} from '@angular/common/http';
import { CardInmuebleComponent } from './plantilla/inicio/card/card-inmueble/card-inmueble.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    PiePaginaComponent,
    InicioComponent,
    ErrorComponent,
    CardInmuebleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
