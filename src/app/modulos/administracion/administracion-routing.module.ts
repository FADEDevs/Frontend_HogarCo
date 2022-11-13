import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAsesorComponent } from './asesores/buscar-asesor/buscar-asesor.component';
import { CrearAsesorComponent } from './asesores/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './asesores/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './asesores/eliminar-asesor/eliminar-asesor.component';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';
import { BuscarCoDeudorComponent } from './co-deudores/buscar-co-deudor/buscar-co-deudor.component';
import { CrearCoDeudorComponent } from './co-deudores/crear-co-deudor/crear-co-deudor.component';
import { EditarCoDeudorComponent } from './co-deudores/editar-co-deudor/editar-co-deudor.component';
import { EliminarCoDeudorComponent } from './co-deudores/eliminar-co-deudor/eliminar-co-deudor.component';
import { BuscarInmobiliariaComponent } from './inmobiliarias/buscar-inmobiliaria/buscar-inmobiliaria.component';
import { CrearInmobiliariaComponent } from './inmobiliarias/crear-inmobiliaria/crear-inmobiliaria.component';
import { EditarInmobiliariaComponent } from './inmobiliarias/editar-inmobiliaria/editar-inmobiliaria.component';
import { EliminarInmobiliariaComponent } from './inmobiliarias/eliminar-inmobiliaria/eliminar-inmobiliaria.component';
import { BuscarInmuebleComponent } from './inmuebles/buscar-inmueble/buscar-inmueble.component';
import { CrearInmuebleComponent } from './inmuebles/crear-inmueble/crear-inmueble.component';
import { EditarInmuebleComponent } from './inmuebles/editar-inmueble/editar-inmueble.component';
import { EliminarInmuebleComponent } from './inmuebles/eliminar-inmueble/eliminar-inmueble.component';

const routes: Routes = [
  {
    path: 'crear-asesor',
    component: CrearAsesorComponent
  },
  {
    path: 'editar-asesor',
    component: EditarAsesorComponent
  },
  {
    path: 'eliminar-asesor',
    component: EliminarAsesorComponent
  },
  {
    path: 'buscar-asesor',
    component: BuscarAsesorComponent
  },
  {
    path: 'crear-cliente',
    component: CrearClienteComponent
  },
  {
    path: 'editar-cliente',
    component: EditarClienteComponent
  },
  {
    path: 'eliminar-cliente',
    component: EliminarClienteComponent
  },
  {
    path: 'buscar-cliente',
    component: BuscarClienteComponent
  },
  {
    path: 'crear-co-deudor',
    component: CrearCoDeudorComponent
  },
  {
    path: 'editar-co-deudor',
    component: EditarCoDeudorComponent
  },
  {
    path: 'eliminar-co-deudor',
    component: EliminarCoDeudorComponent
  },
  {
    path: 'buscar-co-deudor',
    component: BuscarCoDeudorComponent
  },
  {
    path: 'crear-inmobiliaria',
    component: CrearInmobiliariaComponent
  },
  {
    path: 'editar-inmobiliaria',
    component: EditarInmobiliariaComponent
  },
  {
    path: 'eliminar-inmobiliaria',
    component: EliminarInmobiliariaComponent
  },
  {
    path: 'buscar-inmobiliaria',
    component: BuscarInmobiliariaComponent
  },
  {
    path: 'crear-inmueble',
    component: CrearInmuebleComponent
  },
  {
    path: 'editar-inmueble',
    component: EditarInmuebleComponent
  },
  {
    path: 'eliminar-inmueble',
    component: EliminarInmuebleComponent
  },
  {
    path: 'buscar-inmueble',
    component: BuscarInmuebleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
