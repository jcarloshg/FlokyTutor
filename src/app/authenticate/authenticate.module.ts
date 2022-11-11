import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthenticateRoutingModule } from './authenticate-routing.module';

import { HomeAuthenticateComponent } from './pages/home-authenticate/home-authenticate.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';

import { CollegeEnrollmentInputComponent } from './component/college-enrollment-input/college-enrollment-input.component';
import { CollegeNameInputComponent } from './component/college-name-input/college-name-input.component';
import { EmailInputComponent } from './component/email-input/email-input.component';
import { FullNameInputComponent } from './component/full-name-input/full-name-input.component';
import { PassInputComponent } from './component/pass-input/pass-input.component';
import { CustomToastComponent } from './component/custom-toast/custom-toast.component';
import { SpinnerLoadingComponent } from './component/spinner-loading/spinner-loading.component';
import { ErroMessageComponent } from './component/erro-message/erro-message.component';



@NgModule({
  declarations: [
    // screens
    HomeAuthenticateComponent,
    LogInComponent,
    SingUpComponent,
    // components
    CollegeEnrollmentInputComponent,
    CollegeNameInputComponent,
    EmailInputComponent,
    FullNameInputComponent,
    PassInputComponent,
    CustomToastComponent,
    SpinnerLoadingComponent,
    ErroMessageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // mine
    AuthenticateRoutingModule
  ]
})
export class AuthenticateModule { }
