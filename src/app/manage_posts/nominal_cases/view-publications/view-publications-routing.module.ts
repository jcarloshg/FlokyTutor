import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPublicationsComponent } from './pages/view-publications/view-publications.component';
import { PublicationComponent } from './pages/publication/pages/publication/publication.component';


// inicio/publicaciones/ver_publicaciones/

const routes: Routes = [
  {
    path: '',
    component: ViewPublicationsComponent,
    children: []
  },
  {
    path: ':id',
    loadChildren: () => import('./pages/publication/publication.module').then(m => m.PublicationModule),
    component: PublicationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewPublicationsRoutingModule { }
