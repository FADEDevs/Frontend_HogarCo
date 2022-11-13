import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioContrasenaComponent } from './cambio-contrasena/cambio-contrasena.component';
import { LoginComponent } from './login/login.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';

const routes: Routes = [
  {
    path: 'cambio-contrasena',
    component: CambioContrasenaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'recuperar-contrasena',
    component: RecuperarContrasenaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
