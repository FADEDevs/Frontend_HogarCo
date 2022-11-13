import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearAsesorComponent } from './asesores/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './asesores/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './asesores/eliminar-asesor/eliminar-asesor.component';
import { BuscarAsesorComponent } from './asesores/buscar-asesor/buscar-asesor.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearCoDeudorComponent } from './co-deudores/crear-co-deudor/crear-co-deudor.component';
import { EditarCoDeudorComponent } from './co-deudores/editar-co-deudor/editar-co-deudor.component';
import { EliminarCoDeudorComponent } from './co-deudores/eliminar-co-deudor/eliminar-co-deudor.component';
import { BuscarCoDeudorComponent } from './co-deudores/buscar-co-deudor/buscar-co-deudor.component';
import { CrearInmobiliariaComponent } from './inmobiliarias/crear-inmobiliaria/crear-inmobiliaria.component';
import { EditarInmobiliariaComponent } from './inmobiliarias/editar-inmobiliaria/editar-inmobiliaria.component';
import { EliminarInmobiliariaComponent } from './inmobiliarias/eliminar-inmobiliaria/eliminar-inmobiliaria.component';
import { BuscarInmobiliariaComponent } from './inmobiliarias/buscar-inmobiliaria/buscar-inmobiliaria.component';
import { CrearInmuebleComponent } from './inmuebles/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './inmuebles/editar-inmueble/editar-inmueble.component';
import { BuscarInmuebleComponent } from './inmuebles/buscar-inmueble/buscar-inmueble.component';
import { EliminarInmuebleComponent } from './inmuebles/eliminar-inmueble/eliminar-inmueble.component';


@NgModule({
  declarations: [

    CrearAsesorComponent,
    EditarAsesorComponent,
    EliminarAsesorComponent,
    BuscarAsesorComponent,
    CrearClienteComponent,
    EliminarClienteComponent,
    EditarClienteComponent,
    BuscarClienteComponent,
    CrearCoDeudorComponent,
    EditarCoDeudorComponent,
    EliminarCoDeudorComponent,
    BuscarCoDeudorComponent,
    CrearInmobiliariaComponent,
    EditarInmobiliariaComponent,
    EliminarInmobiliariaComponent,
    BuscarInmobiliariaComponent,
    CrearInmuebleComponent,
    EditarInmuebleComponent,
    BuscarInmuebleComponent,
    EliminarInmuebleComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
