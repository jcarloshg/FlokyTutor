import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { HomePublicationsComponent } from './pages/home-publications/home-publications.component';
import { ViewPublicationsComponent } from './pages/view-publications/view-publications.component';
import { EditorPublicationsModule } from './components/editor-publications/editor-publications.module';


@NgModule({
  declarations: [
    HomePublicationsComponent,
    ViewPublicationsComponent
  ],
  imports: [
    CommonModule,
    EditorPublicationsModule,
    PublicationsRoutingModule
  ]
})
export class PublicationsModule { }
