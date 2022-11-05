import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'cuenta',
    // component: ErrPageComponent,
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
  },
  {
    path: 'activities',
    // component: ErrPageComponent,
    loadChildren: () => import('./activities/activities.module').then(m => m.ActivitiesModule),
  },
  {
    path: '**',
    redirectTo: 'activities',
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
