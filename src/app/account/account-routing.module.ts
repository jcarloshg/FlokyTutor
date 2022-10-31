import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAccountComponent } from './pages/home-account/home-account.component';
import { LoginComponent } from './pages/login/login.component';

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
