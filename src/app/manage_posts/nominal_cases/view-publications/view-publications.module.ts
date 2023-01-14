import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing && pages
import { ViewPublicationsRoutingModule } from './view-publications-routing.module';
import { ViewPublicationsComponent } from './pages/view-publications/view-publications.component';
// components
import { ButtonCardToCreatePublicationComponent } from './components/button-card-to-create-publication/button-card-to-create-publication.component';
import { PostsViewerComponent } from './components/posts-viewer/posts-viewer.component';
import { PublicationCardComponent } from './components/publication-card/publication-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
// inputs
// shared && others
import { ManagePostComponentsModule } from '../../components/manage_posts.components.module';

@NgModule({
  declarations: [
    // routing && pages
    ViewPublicationsComponent,
    // components
    ButtonCardToCreatePublicationComponent,
    PostsViewerComponent,
    PublicationCardComponent,
    // inputs
    // shared && others
  ],
  imports: [
    CommonModule,
    // routing && pages
    ViewPublicationsRoutingModule,
    // components
    // inputs
    // shared && others
    SharedModule,
    ManagePostComponentsModule,
  ]
})
export class ViewPublicationsModule { }
