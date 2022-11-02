import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAccountComponent } from './pages/home-account/home-account.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterNewAccountComponent } from './pages/register-new-account/register-new-account.component';

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
