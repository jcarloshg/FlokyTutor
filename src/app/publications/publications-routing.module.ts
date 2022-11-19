import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePublicationsComponent } from './pages/home-publications/home-publications.component';
import { ViewPublicationsComponent } from './pages/view-publications/view-publications.component';

const routes: Routes = [
  {
    path: '',
    component: HomePublicationsComponent,
    children: [
      {
        path: 'ver_publicaciones',
        component: ViewPublicationsComponent,
      },
      {
        path: '**',
        redirectTo: 'ver_publicaciones',
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationsRoutingModule { }
