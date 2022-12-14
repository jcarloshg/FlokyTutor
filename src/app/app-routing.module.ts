import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateGuard } from './authenticate/guards/authenticate.guard';
import { ExistATutorLoggedGuard } from './authenticate/guards/exist-atutor-logged.guard';


const routes: Routes = [
  {
    path: 'cuenta',
    loadChildren: () => import('./authenticate/authenticate.module').then(m => m.AuthenticateModule),
    canLoad: [AuthenticateGuard]
  },
  {
    path: 'incio',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canLoad: [ExistATutorLoggedGuard]
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
