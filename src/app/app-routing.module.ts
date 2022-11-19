import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'cuenta',
    loadChildren: () => import('./authenticate/authenticate.module').then(m => m.AuthenticateModule),
  },
  {
    path: 'actividades',
    loadChildren: () => import('./assign-tasks/assign-tasks.module').then(m => m.AssignTasksModule),
  },
  {
    path: 'publicaciones',
    loadChildren: () => import('./publications/publications.module').then(m => m.PublicationsModule),
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
