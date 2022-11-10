import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';


@NgModule({
  declarations: [
    SingUpComponent,
    LogInComponent
  ],
  imports: [
    CommonModule,
    AuthenticateRoutingModule
  ]
})
export class AuthenticateModule { }
