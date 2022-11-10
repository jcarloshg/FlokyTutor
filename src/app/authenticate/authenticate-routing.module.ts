import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
