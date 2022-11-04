import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeAccountComponent } from './pages/home-account/home-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RegisterNewAccountComponent } from './pages/register-new-account/register-new-account.component';
import { ConfirmAccountComponent } from './pages/confirm-account/confirm-account.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeAccountComponent,
    RegisterNewAccountComponent,
    ConfirmAccountComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // mine
    AccountRoutingModule,
    SharedModule,
  ]
})
export class AccountModule { }
