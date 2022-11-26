import { Component, OnInit } from '@angular/core';
import { InmuebleService  } from 'src/app/servicios/shared/inmueble.service';
import { ModeloInmueble } from 'src/app/modelos/inmueble.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private inmuebleSVC: InmuebleService) { }
  allInmuebles: Observable<any> = this.getInmuebles();


  ngOnInit(): void {
    // this.getInmuebles();
  }

  getInmuebles(){
    // allInmuebles: Observable<any> = this.inmuebleSVC.ObtenerRegistros();
    return this.allInmuebles = this.inmuebleSVC.ObtenerRegistros();
  }

}
