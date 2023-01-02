import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { EditorPublicationsModule } from './components/inputs/editor-publications/editor-publications.module';
import { HomePublicationsComponent } from './pages/home-publications/home-publications.component';
import { ViewPublicationsComponent } from './pages/view-publications/view-publications.component';
import { CreatePublicationsComponent } from './pages/create-publications/create-publications.component';
import { ButtonCardToCreatePublicationComponent } from './components/button-card-to-create-publication/button-card-to-create-publication.component';
import { SharedModule } from '../shared/shared.module';
import { PublicationTitleInputComponent } from './pages/create-publications/components/publication-title-input/publication-title-input.component';
import { PublicationBodyInputComponent } from './pages/create-publications/components/publication-body-input/publication-body-input.component';


@NgModule({
  declarations: [
    HomePublicationsComponent,
    ViewPublicationsComponent,
    CreatePublicationsComponent,
    ButtonCardToCreatePublicationComponent,
    PublicationTitleInputComponent,
    PublicationBodyInputComponent
  ],
  imports: [
    CommonModule,
    EditorPublicationsModule,
    PublicationsRoutingModule,
    SharedModule,
  ]
})
export class PublicationsModule { }
