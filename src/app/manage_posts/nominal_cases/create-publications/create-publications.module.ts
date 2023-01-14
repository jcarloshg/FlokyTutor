import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// routing && pages
import { CreatePublicationsRoutingModule } from './create-publications-routing.module';
// components
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { EditPublicationComponent } from './components/edit-publication/edit-publication.component';
import { PostEditorComponent } from './components/post-editor/post-editor.component';
import { PreviewPublicationComponent } from './components/preview-publication/preview-publication.component';
// inputs
import { PublicationTitleInputComponent } from './components/publication-title-input/publication-title-input.component';
import { PublicationBodyInputModule } from './components/publication-body-input/publication-body-input.module';
// shared && others
import { SharedModule } from 'src/app/shared/shared.module';
import { PublicationsModule } from '../../publications.module';
import { CreatePublicationsComponent } from './pages/create-publications/create-publications.component';
import { PublicationCategoryInputComponent } from './components/publication-category-input/publication-category-input.component';



@NgModule({
  declarations: [
    // routing && pages
    CreatePublicationsComponent,
    // components
    ConfirmationDialogComponent,
    EditPublicationComponent,
    PostEditorComponent,
    PreviewPublicationComponent,
    // inputs
    PublicationTitleInputComponent,
    PublicationCategoryInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    // routing && pages
    CreatePublicationsRoutingModule,
    // inputs
    PublicationBodyInputModule,
    // shared && others
    SharedModule,
    PublicationsModule,
  ]
})
export class CreatePublicationsModule { }
