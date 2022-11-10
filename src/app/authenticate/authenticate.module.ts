import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { HomeAuthenticateComponent } from './pages/home-authenticate/home-authenticate.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmailInputComponent } from './component/email-input/email-input.component';
import { PassInputComponent } from './component/pass-input/pass-input.component';
import { FullNameInputComponent } from './component/full-name-input/full-name-input.component';



@NgModule({
  declarations: [
    SingUpComponent,
    LogInComponent,
    HomeAuthenticateComponent,
    EmailInputComponent,
    PassInputComponent,
    FullNameInputComponent,
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
