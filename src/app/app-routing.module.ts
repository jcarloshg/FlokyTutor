import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'cuenta',
    // component: ErrPageComponent,
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
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
