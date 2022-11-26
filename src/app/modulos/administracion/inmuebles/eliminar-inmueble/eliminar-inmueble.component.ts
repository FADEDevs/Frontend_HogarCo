import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloInmueble } from 'src/app/modelos/inmueble.model';
import { InmuebleService } from 'src/app/servicios/shared/inmueble.service';

@Component({
  selector: 'app-eliminar-inmueble',
  templateUrl: './eliminar-inmueble.component.html',
  styleUrls: ['./eliminar-inmueble.component.css']
})
export class EliminarInmuebleComponent implements OnInit {

  id: string = this.route.snapshot.params['id'];
  inmueble: ModeloInmueble = new ModeloInmueble();

  constructor(private servicioInmueble: InmuebleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.servicioInmueble.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloInmueble) =>
    {
      this.inmueble = datos;
    })
  }

  Eliminar(){
    this.servicioInmueble.EliminarInmueble(this.id).subscribe(
      (datos: ModeloInmueble) =>{
        alert("Producto eliminado correctamente");
        this.router.navigate(["/administracion/buscar-inmueble"]);
      },(error: any) =>
      alert("error eliminando el producto")
    )
  }

}
