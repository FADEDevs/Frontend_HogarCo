import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatosUserModel } from 'src/app/modelos/datos-user.model';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  formularioRegistro: FormGroup=new FormGroup({});

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  Formulario(){
    this.formularioRegistro=this.fb.group({
        documento:[""],
        nombres:[""],
        apellidos:[""],
        correo:[""],
        celular:[""],
        rol:[]   
    })  
  }

  RegistroUsuario(){
    if(this.formularioRegistro.invalid){
      alert("los datos con asterisco son obligatorios");
    }else{
      let usuario= new DatosUserModel();
      usuario.nombres=this.formularioRegistro.controls['nombre'].value;

    }
  }
}
