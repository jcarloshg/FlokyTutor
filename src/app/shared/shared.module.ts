import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// mine
import { CollegeEnrollmentInputComponent } from './inputs/college-enrollment-input/college-enrollment-input.component';
import { CollegeNameInputComponent } from './inputs/college-name-input/college-name-input.component';
import { EmailInputComponent } from './inputs/email-input/email-input.component';
import { FullNameInputComponent } from './inputs/full-name-input/full-name-input.component';
import { PassInputComponent } from './inputs/pass-input/pass-input.component';
import { CustomToastComponent } from './inputs/custom-toast/custom-toast.component';
import { SpinnerLoadingComponent } from './inputs/spinner-loading/spinner-loading.component';
import { ErroMessageComponent } from './inputs/erro-message/erro-message.component';
import { CodeVerificationInputComponent } from './inputs/code-verification-input/code-verification-input.component';
import { SideBarComponent } from './ui/side-bar/side-bar.component';
import { HeaderLogInComponent } from './ui/header-log-in/header-log-in.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    CodeVerificationInputComponent,
    CollegeEnrollmentInputComponent,
    CollegeNameInputComponent,
    CustomToastComponent,
    EmailInputComponent,
    ErroMessageComponent,
    FullNameInputComponent,
    PassInputComponent,
    SpinnerLoadingComponent,
    SideBarComponent,
    HeaderLogInComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    CodeVerificationInputComponent,
    CollegeEnrollmentInputComponent,
    CollegeNameInputComponent,
    CustomToastComponent,
    EmailInputComponent,
    ErroMessageComponent,
    FullNameInputComponent,
    HeaderLogInComponent,
    PassInputComponent,
    SideBarComponent,
    SpinnerLoadingComponent,
  ]
})
export class SharedModule { }
