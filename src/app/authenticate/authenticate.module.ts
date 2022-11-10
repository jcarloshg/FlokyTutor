import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { HomeAuthenticateComponent } from './pages/home-authenticate/home-authenticate.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SingUpComponent,
    LogInComponent,
    HomeAuthenticateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // mine
    AuthenticateRoutingModule
  ]
})
export class AuthenticateModule { }
