import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { HomePublicationsComponent } from './pages/home-publications/home-publications.component';
import { ViewPublicationsComponent } from './pages/view-publications/view-publications.component';
import { CreatePublicationsComponent } from './pages/create-publications/create-publications.component';
import { ButtonCardToCreatePublicationComponent } from './components/button-card-to-create-publication/button-card-to-create-publication.component';
import { PublicationTitleInputComponent } from './pages/create-publications/components/publication-title-input/publication-title-input.component';
import { PublicationBodyInputModule } from './pages/create-publications/components/publication-body-input/publication-body-input.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePublicationsComponent,
    ViewPublicationsComponent,
    CreatePublicationsComponent,
    ButtonCardToCreatePublicationComponent,
    PublicationTitleInputComponent,
  ],
  imports: [
    CommonModule,
    PublicationBodyInputModule,
    PublicationsRoutingModule,
    SharedModule,
  ]
})
export class PublicationsModule { }
