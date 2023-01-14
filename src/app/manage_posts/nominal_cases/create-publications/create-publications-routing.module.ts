import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePublicationsComponent } from './pages/create-publications/create-publications.component';


// inicio/publicaciones/crear_publicacion/


const routes: Routes = [
  {
    path: '',
    component: CreatePublicationsComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePublicationsRoutingModule { }
