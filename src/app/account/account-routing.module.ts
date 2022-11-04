import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// mine
import { HomeAccountComponent } from './pages/home-account/home-account.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterNewAccountComponent } from './pages/register-new-account/register-new-account.component';
import { ConfirmAccountComponent } from './pages/confirm-account/confirm-account.component';

const routes: Routes = [
  {
    path: '',
    component: HomeAccountComponent,
    children: [
      {
        path: 'ingresar',
        component: LoginComponent,
      },
      {
        path: 'registro_nueva_cuenta',
        component: RegisterNewAccountComponent,
      },
      {
        path: 'confirmar_cuenta',
        component: ConfirmAccountComponent,
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
export class AccountRoutingModule { }
