import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// routing && pages
import { PublicationComponent } from './pages/publication/publication.component';
// components
import { PublicationCommentsComponent } from './components/publication-comments/publication-comments.component';
import { PublicationViewerComponent } from './components/publication-viewer/publication-viewer.component';
import { CommentInputComponent } from './components/comment-input/comment-input.component';
import { ManagePostComponentsModule } from 'src/app/manage_posts/components/manage_posts.components.module';
import { SharedModule } from 'src/app/shared/shared.module';
// inputs
// shared && others

@NgModule({
    declarations: [
        // routing && pages
        PublicationComponent,
        // components
        PublicationCommentsComponent,
        PublicationViewerComponent,
        CommentInputComponent,
        // inputs
        // shared && others
    ],
    imports: [
        CommonModule,
        FormsModule,
        // routing && pages
        // components
        // inputs
        // shared && others
        SharedModule,
        ManagePostComponentsModule,
    ],
    exports: [],
    providers: [],
})
export class PublicationModule { }