import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IdentificarModel } from 'src/app/modelos/identificar.model';
import { SeguridadService } from 'src/app/servicios/shared/seguridad.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  //Sesión
  sesionActiva: Boolean = false;

  subs: Subscription = new Subscription();

  constructor(private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.subs = this.seguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos:IdentificarModel) =>
    {
      this.sesionActiva= datos.estaIdentifiado;
    })
  }

}
