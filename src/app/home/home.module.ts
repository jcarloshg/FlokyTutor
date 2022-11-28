import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { PersonInfoRowComponent } from './pages/my-profile/components/person-info-row/person-info-row.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    HomeComponent,
    MyProfileComponent,
    PersonInfoRowComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
