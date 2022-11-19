import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { HomePublicationsComponent } from './pages/home-publications/home-publications.component';
import { ViewPublicationsComponent } from './pages/view-publications/view-publications.component';


@NgModule({
  declarations: [
    HomePublicationsComponent,
    ViewPublicationsComponent
  ],
  imports: [
    CommonModule,
    PublicationsRoutingModule
  ]
})
export class PublicationsModule { }
