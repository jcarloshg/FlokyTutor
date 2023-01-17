import { LOCALE_ID, NgModule } from '@angular/core';
import localES_MX from "@angular/common/locales/es-MX";
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
// routing && pages
import { PublicationComponent } from './pages/publication/publication.component';
// components
import { PublicationCommentsComponent } from './components/publication-comments/publication-comments.component';
import { PublicationViewerComponent } from './components/publication-viewer/publication-viewer.component';
import { CommentInputComponent } from './components/comment-input/comment-input.component';
import { ManagePostComponentsModule } from 'src/app/manage_posts/components/manage_posts.components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
// inputs
// shared && others

registerLocaleData(localES_MX);

@NgModule({
    declarations: [
        // routing && pages
        PublicationComponent,
        // components
        PublicationCommentsComponent,
        PublicationViewerComponent,
        CommentInputComponent,
        CommentCardComponent,
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
    providers: [{
        provide: LOCALE_ID,
        useValue: 'es-HN'
    }],
})
export class PublicationModule { }