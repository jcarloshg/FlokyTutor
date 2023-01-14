import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublicationsRoutingModule } from './publications-routing.module';
import { HomePublicationsComponent } from './nominal_cases/home-publications/home-publications.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomePublicationsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PublicationsRoutingModule,
    SharedModule,
  ],
  exports: []
})
export class PublicationsModule { }
