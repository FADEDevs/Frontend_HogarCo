import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosUserModel } from 'src/app/modelos/datos-user.model';
import { SeguridadService } from 'src/app/servicios/shared/seguridad.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({    
    'documento': ['', [Validators.required]],
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'celular': ['', [Validators.required]],       
    'estado': ['', [Validators.required]],
    'rol': ['', [Validators.required]]

  });

  
  constructor(private fb: FormBuilder,
    private servicioRegistro: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarUsuario(){
    let documento = this.fgValidador.controls["documento"].value;
    let nombres = this.fgValidador.controls["nombres"].value;
    let apellidos = this.fgValidador.controls["apellidos"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let celular = this.fgValidador.controls["celular"].value;    
    let rol = this.fgValidador.controls["rol"].value;    
    let p =  new DatosUserModel;

    p.documento = documento;
    p.nombres = nombres;
    p.apellidos = apellidos;
    p.correo = correo;
    p.rol= rol;
    p.estado = "estado";
    p.celular = celular;    
    this.servicioRegistro.RegistroUsuario(p).subscribe((datos: DatosUserModel) =>{
      alert("ususario almacenado correctamente");
      this.router.navigate(["/seguridad/login"]);
    },(error: any) =>
    alert("error almacenando el producto")
    )

  }

}
