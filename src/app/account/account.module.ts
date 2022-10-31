import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeAccountComponent } from './pages/home-account/home-account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    HomeAccountComponent
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
