import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { CambioContrasenaComponent } from './cambio-contrasena/cambio-contrasena.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';

const routes: Routes = [
  {
    path: 'cambio-contrasena',
    component: CambioContrasenaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [ValidadorSesionGuard]
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
