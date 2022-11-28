import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CambioContrasenaModel } from 'src/app/modelos/cambio-contrasena.model';
import { SeguridadService } from 'src/app/servicios/shared/seguridad.service';

@Component({
  selector: 'app-cambio-contrasena',
  templateUrl: './cambio-contrasena.component.html',
  styleUrls: ['./cambio-contrasena.component.css']
})
export class CambioContrasenaComponent implements OnInit {

  //Objeto para unir los datos del formulario
  formContra : FormGroup = new FormGroup({});

  constructor(
    private formB : FormBuilder,
    private router : Router,
    private servSeguridad : SeguridadService
  ) { }

  ngOnInit(): void {
    this.DataForm();
  }

  //Metodo para guardar los datos del formulario
  DataForm(){
    this.formContra = this.formB.group({
      passCurrent : ["",[Validators.required]],
      passNew : ["",[Validators.required]],
      passValidate : ["",[Validators.required]]
    });
  }

  //Metodo que enviará los datos al Backend
  CambioContra(){
    if (this.formContra.invalid) {
      alert("Los datos suministrados no están completos!.")
    } else {
      let datos = new CambioContrasenaModel();
      datos.cActual = this.formContra.controls["passCurrent"].value;
      datos.cNueva = this.formContra.controls["passNew"].value;
      datos.cValidada = this.formContra.controls["passValidate"].value;
      this.servSeguridad.CambioContra(datos).subscribe(
        (datos:any) => {this.servSeguridad.CambioContra(datos);
        alert("Se cambio la contraseña");
        }, (error: any) => {
          alert("No se pudo cambiar la contraseña");
        });
    }
  }
  
}
