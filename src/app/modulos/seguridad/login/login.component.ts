import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/shared/seguridad.service';
import { CredencialesModel } from '../../../modelos/credenciales.model';

declare const GenerarVentanaModal:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //objeto para agrupar el formulario
  formLog:FormGroup = new FormGroup({});

  mostrar : Boolean = true; //para la alerta
  constructor(
    private formB: FormBuilder,
    private servicioSeguridad: SeguridadService
  ) { }

  ngOnInit(): void {
    this.DataForm();
  }
  //Metodo que "guarda" los datos
  DataForm(){
    this.formLog = this.formB.group({
      user: ["",[Validators.required,Validators.email]],
      password: ["",[Validators.required]]
    });
  }
  //Metodo que envia los datos del formulario al Backend
  Login(){
    if(this.formLog.invalid){
      this.mostrar = false;
      alert("Los datos no son correctos.!");
    }else{
      let datos = new CredencialesModel();
      datos.email = this.formLog.controls['user'].value;
      datos.password = this.formLog.controls['password'].value;
      this.servicioSeguridad.Login(datos).subscribe({
        next:(data:any) => console.log(data),
        error: (e) => console.log(e)
      });
    }
  }
}
