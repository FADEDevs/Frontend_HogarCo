import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloInmueble } from 'src/app/modelos/inmueble.model';
import { InmuebleService } from 'src/app/servicios/shared/inmueble.service';

@Component({
  selector: 'app-crear-inmueble',
  templateUrl: './crear-inmueble.component.html',
  styleUrls: ['./crear-inmueble.component.css']
})
export class CrearInmuebleComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'valor': ['', [Validators.required]],
    'departamento': ['', [Validators.required]],
    'ciudad': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'imagen': ['', [Validators.required]],
  });

  
  constructor(private fb: FormBuilder,
    private servicioInmueble: InmuebleService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarInmueble(){
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
    this.servicioInmueble.CrearInmueble(p).subscribe((datos: ModeloInmueble) =>{
      alert("Producto almacenado correctamente");
      this.router.navigate(["/administracion/buscar-inmueble"]);
    },(error: any) =>
    alert("error almacenando el ´producto")
    )

  }

}
