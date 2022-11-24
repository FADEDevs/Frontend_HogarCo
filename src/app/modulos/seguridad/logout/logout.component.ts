import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/shared/seguridad.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private servivioSeguridad: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
    this.servivioSeguridad.EliminarInformacionSesion();
    this.router.navigate(['/inicio'])
  }

}
