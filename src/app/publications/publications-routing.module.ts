import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePublicationsComponent } from './pages/home-publications/home-publications.component';
import { ViewPublicationsComponent } from './pages/view-publications/view-publications.component';
import { CreatePublicationsComponent } from './pages/create-publications/create-publications.component';
import { PublicationComponent } from './pages/publication/publication.component';

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
        path: ':id',
        component: PublicationComponent,
      },
      {
        path: 'create_publicacion',
        component: CreatePublicationsComponent,
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
