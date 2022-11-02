import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmailInputComponent } from './inputs/email-input/email-input.component';
import { PasswordInputComponent } from './inputs/password-input/password-input.component';
import { NameInputComponent } from './inputs/name-input/name-input.component';
import { CollegeEnrollmentInputComponent } from './inputs/college-enrollment-input/college-enrollment-input.component';
import { CollegeNameInputComponent } from './inputs/college-name-input/college-name-input.component';



@NgModule({
  declarations: [
    EmailInputComponent,
    PasswordInputComponent,
    NameInputComponent,
    CollegeEnrollmentInputComponent,
    CollegeNameInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    EmailInputComponent,
    PasswordInputComponent,
    NameInputComponent,
    CollegeEnrollmentInputComponent,
    CollegeNameInputComponent,
  ]
})
export class SharedModule { }
