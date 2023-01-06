import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublicationsRoutingModule } from './publications-routing.module';
import { HomePublicationsComponent } from './pages/home-publications/home-publications.component';
import { SharedModule } from '../shared/shared.module';
// view publications
import { ViewPublicationsComponent } from './pages/view-publications/view-publications.component';
import { ButtonCardToCreatePublicationComponent } from './pages/view-publications/components/button-card-to-create-publication/button-card-to-create-publication.component';
// create publications
import { CreatePublicationsComponent } from './pages/create-publications/create-publications.component';
import { PublicationTitleInputComponent } from './pages/create-publications/components/publication-title-input/publication-title-input.component';
import { PublicationBodyInputModule } from './pages/create-publications/components/publication-body-input/publication-body-input.module';
import { PreviewPublicationComponent } from './pages/create-publications/components/preview-publication/preview-publication.component';
import { EditPublicationComponent } from './pages/create-publications/components/edit-publication/edit-publication.component';
import { ConfirmationDialogComponent } from './pages/create-publications/components/confirmation-dialog/confirmation-dialog.component';
import { PostEditorComponent } from './pages/create-publications/components/post-editor/post-editor.component';
import { PostsViewerComponent } from './pages/view-publications/components/posts-viewer/posts-viewer.component';
import { PublicationCardComponent } from './pages/view-publications/components/publication-card/publication-card.component';



@NgModule({
  declarations: [
    HomePublicationsComponent,
    ViewPublicationsComponent,
    CreatePublicationsComponent,
    ButtonCardToCreatePublicationComponent,
    PublicationTitleInputComponent,
    PreviewPublicationComponent,
    EditPublicationComponent,
    ConfirmationDialogComponent,
    PostEditorComponent,
    PostsViewerComponent,
    PublicationCardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PublicationBodyInputModule,
    PublicationsRoutingModule,
    SharedModule,
  ]
})
export class PublicationsModule { }
