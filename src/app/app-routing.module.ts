import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateGuard } from './authenticate/guards/authenticate.guard';


const routes: Routes = [
  {
    path: 'cuenta',
    loadChildren: () => import('./authenticate/authenticate.module').then(m => m.AuthenticateModule),
  },
  {
    path: 'incio',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canLoad: [AuthenticateGuard]
  },
  {
    path: '**',
    redirectTo: 'cuenta',
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
