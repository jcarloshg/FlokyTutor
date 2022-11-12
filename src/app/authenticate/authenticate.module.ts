import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthenticateRoutingModule } from './authenticate-routing.module';

import { HomeAuthenticateComponent } from './pages/home-authenticate/home-authenticate.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    // screens
    HomeAuthenticateComponent,
    LogInComponent,
    SingUpComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // mine
    AuthenticateRoutingModule,
    SharedModule,
  ]
})
export class AuthenticateModule { }
