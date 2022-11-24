import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloInmueble } from 'src/app/modelos/inmueble.model';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {
url='http://localhost:3000'

  constructor(private http: HttpClient ) {}

  ObtenerRegistros():Observable<ModeloInmueble[]>{
    return this.http.get<ModeloInmueble[]>(`${this.url}/inmuebles`)
  }

  CrearInmueble(producto: ModeloInmueble):Observable<ModeloInmueble>{
    return this.http.post<ModeloInmueble>(`${this.url}/inmuebles`,producto)
  }

  ActualizarProducto(producto: ModeloInmueble):Observable<ModeloInmueble>{
    return this.http.put<ModeloInmueble>(`${this.url}/inmuebles`,producto)
  }

  EliminarInmueble(id:string):Observable<any>{
    return this.http.delete(`${this.url}/inmuebles/${id}`)
  }
}
