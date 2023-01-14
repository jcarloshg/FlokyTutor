import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublicationsRoutingModule } from './publications-routing.module';
import { HomePublicationsComponent } from './nominal_cases/home-publications/home-publications.component';
import { SharedModule } from '../shared/shared.module';
// view publications
import { ViewPublicationsComponent } from './nominal_cases/view-publications/view-publications.component';
import { ButtonCardToCreatePublicationComponent } from './nominal_cases/view-publications/components/button-card-to-create-publication/button-card-to-create-publication.component';
import { PostsViewerComponent } from './nominal_cases/view-publications/components/posts-viewer/posts-viewer.component';
import { PublicationCardComponent } from './nominal_cases/view-publications/components/publication-card/publication-card.component';
import { CategoriesBadgeComponent } from './components/categories-badge/categories-badge.component';
import { CategoriesBadgeDirective } from './components/categories-badge/categories-badge.directive';
import { PublicationComponent } from './nominal_cases/publication/publication.component';
import { PublicationHelpersComponent } from './nominal_cases/publication/components/publication-helpers/publication-helpers.component';
import { PublicationViewerComponent } from './nominal_cases/publication/components/publication-viewer/publication-viewer.component';
import { PublicationCommentsComponent } from './nominal_cases/publication/components/publication-comments/publication-comments.component';
import { CommentInputComponent } from './nominal_cases/publication/components/publication-comments/components/comment-input/comment-input.component';



@NgModule({
  declarations: [
    HomePublicationsComponent,
    // View posts
    ViewPublicationsComponent,
    PublicationCardComponent,
    CategoriesBadgeComponent,
    CategoriesBadgeDirective,
    PostsViewerComponent,
    PublicationComponent,
    PublicationHelpersComponent,

    ButtonCardToCreatePublicationComponent,

    PublicationViewerComponent,
    PublicationCommentsComponent,
    CommentInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PublicationsRoutingModule,
    SharedModule,
  ],
  exports: [
    CategoriesBadgeComponent
  ]
})
export class PublicationsModule { }
