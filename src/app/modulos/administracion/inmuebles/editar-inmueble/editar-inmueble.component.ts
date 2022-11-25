import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloInmueble } from 'src/app/modelos/inmueble.model';
import { InmuebleService } from 'src/app/servicios/shared/inmueble.service';

@Component({
  selector: 'app-editar-inmueble',
  templateUrl: './editar-inmueble.component.html',
  styleUrls: ['./editar-inmueble.component.css']
})
export class EditarInmuebleComponent implements OnInit {

  id: string ='';

  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'valor': ['', [Validators.required]],
    'departamento': ['', [Validators.required]],
    'ciudad': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'imagen': ['', [Validators.required]],
  });

  
  constructor(private fb: FormBuilder,
    private servicioInmueble: InmuebleService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarInmueble();
  }

  BuscarInmueble(){
    this.servicioInmueble.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloInmueble) =>
    {
      this.fgValidador.controls["id"].setValue(datos.id);
      this.fgValidador.controls["valor"].setValue(datos.valor);
      this.fgValidador.controls["departamento"].setValue(datos.departamento);
      this.fgValidador.controls["ciudad"].setValue(datos.ciudad);
      this.fgValidador.controls["direccion"].setValue(datos.direccion);
      this.fgValidador.controls["estado"].setValue(datos.estado);
      this.fgValidador.controls["imagen"].setValue(datos.imagen);
      
    })
  }

  EditarInmueble(){
    let valor = parseInt(this.fgValidador.controls["valor"].value);
    let departamento = this.fgValidador.controls["departamento"].value;
    let ciudad = this.fgValidador.controls["ciudad"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let estado = this.fgValidador.controls["estado"].value;
    let imagen = this.fgValidador.controls["imagen"].value;
    let p =  new ModeloInmueble;
    p.valor = valor;
    p.departamento = departamento;
    p.ciudad = ciudad;
    p.direccion = direccion;
    p.estado = estado;
    p.imagen = imagen
    p.inmobiliariaId= "string";
    p.asesorId= "string";
    p.tipoInmueble= "string";
    p.tipoOferta= "string";
    p.urlVideo= "string";
    p.id= this.id;
    this.servicioInmueble.ActualizarInmueble(p).subscribe((datos: ModeloInmueble) =>{
      alert("Producto actualizado correctamente");
      this.router.navigate(["/administracion/buscar-inmueble"]);
    },(error: any) =>
    alert("error actualizando el producto")
    )

  }
}
