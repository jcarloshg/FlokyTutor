import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { EditorPublicationsComponent } from './editor-publications.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
