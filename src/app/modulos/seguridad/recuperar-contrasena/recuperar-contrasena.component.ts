import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/shared/seguridad.service';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent implements OnInit {

  fgRecoverPass: FormGroup = this.fb.group({
    'correo':['',[Validators.required,Validators.email]]
  });

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService) { }

  ngOnInit(): void {    
  } 

  IdentificarUsuario(){
    let correo = this.fgRecoverPass.controls["correo"].value;  
    let usuarioRe = correo.toString();
    this.servicioSeguridad.recuperar(correo).subscribe(
      (data:any) => window.alert("contraseña enviada correctamente a: "+usuarioRe),
      (erro:any) => alert("no " + usuarioRe)
    );
  }
}
