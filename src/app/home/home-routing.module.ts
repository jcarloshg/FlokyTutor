import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'bienvenido',
        component: WelcomeComponent,
      },
      {
        path: 'actividades',
        loadChildren: () => import('../assign-tasks/assign-tasks.module').then(m => m.AssignTasksModule),
      },
      {
        path: 'publicaciones',
        loadChildren: () => import('../publications/publications.module').then(m => m.PublicationsModule),
      },
      {
        path: '**',
        redirectTo: 'bienvenido',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }