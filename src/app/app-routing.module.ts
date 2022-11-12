import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'cuenta',
    loadChildren: () => import('./authenticate/authenticate.module').then(m => m.AuthenticateModule),
  },
  // {
  //   path: 'activities',
  //   // component: ErrPageComponent,
  //   loadChildren: () => import('./activities/activities.module').then(m => m.ActivitiesModule),
  // },
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
