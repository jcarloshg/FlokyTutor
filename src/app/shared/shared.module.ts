import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailInputComponent } from './inputs/email-input/email-input.component';



@NgModule({
  declarations: [
    EmailInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    EmailInputComponent
  ]
})
export class SharedModule { }
