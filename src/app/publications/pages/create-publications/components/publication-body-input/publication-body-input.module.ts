import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { PublicationBodyInputComponent } from './publication-body-input.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuillModule,
  ],
  declarations: [
    PublicationBodyInputComponent,
  ],
  exports: [
    PublicationBodyInputComponent
  ]
})
export class PublicationBodyInputModule { }
