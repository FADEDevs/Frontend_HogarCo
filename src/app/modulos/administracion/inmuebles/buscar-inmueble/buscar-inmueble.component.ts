import { Component, OnInit } from '@angular/core';
import { ModeloInmueble } from 'src/app/modelos/inmueble.model';
import { InmuebleService } from 'src/app/servicios/shared/inmueble.service';

@Component({
  selector: 'app-buscar-inmueble',
  templateUrl: './buscar-inmueble.component.html',
  styleUrls: ['./buscar-inmueble.component.css']
})
export class BuscarInmuebleComponent implements OnInit {

  listadoRegistros: ModeloInmueble[] = [];

  constructor(private  inmuebleServicio: InmuebleService) { }

  ngOnInit(): void {
    this.ObtenerListadoInmuebles();
  }

  ObtenerListadoInmuebles(){
     this.inmuebleServicio.ObtenerRegistros().subscribe((datos: ModeloInmueble[]) => {
      this.listadoRegistros = datos;
     })
  }
}
