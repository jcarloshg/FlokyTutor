import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePublicationsComponent } from './nominal_cases/home-publications/home-publications.component';
import { ViewPublicationsComponent } from './nominal_cases/view-publications/view-publications.component';
import { CreatePublicationsComponent } from './nominal_cases/create-publications/create-publications.component';
import { PublicationComponent } from './nominal_cases/publication/publication.component';

const routes: Routes = [
  {
    path: '',
    component: HomePublicationsComponent,
    children: [
      {
        path: 'create_publicacion',
        component: CreatePublicationsComponent,
      },
      {
        path: 'ver_publicaciones',
        component: ViewPublicationsComponent,
      },
      {
        path: ':id',
        component: PublicationComponent,
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
