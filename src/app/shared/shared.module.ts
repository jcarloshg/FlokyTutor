import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// mine
import { CollegeEnrollmentInputComponent } from './inputs/college-enrollment-input/college-enrollment-input.component';
import { CollegeNameInputComponent } from './inputs/college-name-input/college-name-input.component';
import { CustomToastComponent } from './inputs/custom-toast/custom-toast.component';
import { EmailInputComponent } from './inputs/email-input/email-input.component';
import { NameInputComponent } from './inputs/name-input/name-input.component';
import { PasswordInputComponent } from './inputs/password-input/password-input.component';
import { VerificationCodeInputComponent } from './inputs/verification-code-input/verification-code-input.component';
import { MessageErrorComponent } from './inputs/message-error/message-error.component';




@NgModule({
  declarations: [
    CollegeEnrollmentInputComponent,
    CollegeNameInputComponent,
    CustomToastComponent,
    EmailInputComponent,
    NameInputComponent,
    PasswordInputComponent,
    VerificationCodeInputComponent,
    MessageErrorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CollegeEnrollmentInputComponent,
    CollegeNameInputComponent,
    CustomToastComponent,
    EmailInputComponent,
    NameInputComponent,
    PasswordInputComponent,
    VerificationCodeInputComponent,
    MessageErrorComponent,
  ]
})
export class SharedModule { }
