import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { EditorPublicationsComponent } from './editor-publications.component';


@NgModule({
  imports: [
    CommonModule,
    QuillModule,
  ],
  declarations: [
    EditorPublicationsComponent,
  ],
  exports: [
    EditorPublicationsComponent,
  ]
})
export class EditorPublicationsModule { }
