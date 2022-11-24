import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CredencialesModel } from 'src/app/modelos/credenciales.model';
import { ModeloDatos } from 'src/app/modelos/datos.modelo';
import { IdentificarModel } from 'src/app/modelos/identificar.model';


@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  //variable para guardar la url
  url:string= "http://localhost:3000";
  datosUsuarioEnSesion = new BehaviorSubject<IdentificarModel>(new IdentificarModel)

  constructor(
    private http: HttpClient
  ) { 
    this.VerificarSesionActual
  }

  VerificarSesionActual(){
    let datos = this.ObtenerInformacionSesion();
    if(datos){
      this.RefrescarDatosSesion(datos);
    }
  }

  RefrescarDatosSesion(datos: IdentificarModel){
    return this.datosUsuarioEnSesion.next(datos);
  }

  //Metodo para enviar por medio del POST los datos al Backend
  Login(credenciales:CredencialesModel):Observable<IdentificarModel>{
    return this.http.post<IdentificarModel>(`${this.url}/Login`,{
      email: credenciales.email,
      password: credenciales.password
      
    });
  }

  AlmacenarSesion(datos: IdentificarModel){
    datos.estaIdentifiado = true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion",stringDatos);
    this.RefrescarDatosSesion(datos);
  }

  ObtenerInformacionSesion(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos;      
    }else{
      return null;
    }  
  }

  EliminarInformacionSesion(){
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesion(new IdentificarModel());
  }

  SeHaIniciadoSesion(){
    let datosString = localStorage.getItem("datosSesion");
    return datosString;
  }

  ObtenerDatosUsuarioEnSesion(){
    return this.datosUsuarioEnSesion.asObservable();
  }

  ObtenerToken(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);  
      return datos.tk;    
    }else{
      return '';
    }
  }
  
  recuperar(email: string): Observable<boolean>{    
    let urlApi = "http://localhost:3000/RecuperarPass";
    return this.http.post<boolean>(`${urlApi}/${email}`, {correo:email}); 
  }
}
