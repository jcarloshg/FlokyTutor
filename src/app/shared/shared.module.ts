import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// mine
import { ButtonListeningComponent } from './ui/button-listening/button-listening.component';
import { ButtonReadingComponent } from './ui/button-reading/button-reading.component';
import { ButtonSpeakingComponent } from './ui/button-speaking/button-speaking.component';
import { ButtonWritingComponent } from './ui/button-writing/button-writing.component';
import { CardActivityComponent } from './ui/card-activity/card-activity.component';
import { CardActivityDirective } from './directives/card-activity.directive';
import { CodeVerificationInputComponent } from './inputs/code-verification-input/code-verification-input.component';
import { CollegeEnrollmentInputComponent } from './inputs/college-enrollment-input/college-enrollment-input.component';
import { CollegeNameInputComponent } from './inputs/college-name-input/college-name-input.component';
import { CustomToastComponent } from './inputs/custom-toast/custom-toast.component';
import { EmailInputComponent } from './inputs/email-input/email-input.component';
import { ErroMessageComponent } from './inputs/erro-message/erro-message.component';
import { FullNameInputComponent } from './inputs/full-name-input/full-name-input.component';
import { HeaderHomeComponent } from './ui/header-home/header-home.component';
import { PassInputComponent } from './inputs/pass-input/pass-input.component';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './ui/side-bar/side-bar.component';
import { SpinnerLoadingComponent } from './inputs/spinner-loading/spinner-loading.component';
import { AccountShortIDPipe } from './pipes/account-short-id.pipe';





@NgModule({
  declarations: [
    //inputs
    CodeVerificationInputComponent,
    CollegeEnrollmentInputComponent,
    CollegeNameInputComponent,
    EmailInputComponent,
    FullNameInputComponent,
    PassInputComponent,

    //buttons
    ButtonListeningComponent,
    ButtonReadingComponent,
    ButtonSpeakingComponent,
    ButtonWritingComponent,
    CardActivityComponent,

    //other
    CardActivityDirective,
    CustomToastComponent,
    ErroMessageComponent,
    HeaderHomeComponent,
    SideBarComponent,
    SpinnerLoadingComponent,

    // pipes
    AccountShortIDPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [

    //inputs
    CodeVerificationInputComponent,
    CollegeEnrollmentInputComponent,
    CollegeNameInputComponent,
    EmailInputComponent,
    FullNameInputComponent,
    PassInputComponent,

    //buttons
    ButtonListeningComponent,
    ButtonReadingComponent,
    ButtonSpeakingComponent,
    ButtonWritingComponent,
    CardActivityComponent,

    //other
    CustomToastComponent,
    ErroMessageComponent,
    HeaderHomeComponent,
    SideBarComponent,
    SpinnerLoadingComponent,

    // pipes
    AccountShortIDPipe
  ]
})
export class SharedModule { }
