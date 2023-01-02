import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { HomePublicationsComponent } from './pages/home-publications/home-publications.component';
import { ViewPublicationsComponent } from './pages/view-publications/view-publications.component';
import { EditorPublicationsModule } from './components/editor-publications/editor-publications.module';
import { CreatePublicationsComponent } from './pages/create-publications/create-publications.component';
import { ButtonCardToCreatePublicationComponent } from './components/button-card-to-create-publication/button-card-to-create-publication.component';


@NgModule({
  declarations: [
    HomePublicationsComponent,
    ViewPublicationsComponent,
    CreatePublicationsComponent,
    ButtonCardToCreatePublicationComponent
  ],
  imports: [
    CommonModule,
    EditorPublicationsModule,
    PublicationsRoutingModule
  ]
})
export class PublicationsModule { }
