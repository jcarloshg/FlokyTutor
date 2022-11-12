import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmSingUpComponent } from './pages/confirm-sing-up/confirm-sing-up.component';

// mine
import { HomeAuthenticateComponent } from './pages/home-authenticate/home-authenticate.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';

const routes: Routes = [
  {
    path: '',
    component: HomeAuthenticateComponent,
    children: [
      {
        path: 'ingresar',
        component: LogInComponent,
      },
      {
        path: 'registro_nueva_cuenta',
        component: SingUpComponent,
      },
      {
        path: 'confirmar_nueva_cuenta',
        component: ConfirmSingUpComponent
      },
      {
        path: '**',
        redirectTo: 'ingresar'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticateRoutingModule { }
