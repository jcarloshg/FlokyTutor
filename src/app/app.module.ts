import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Auth } from "aws-amplify";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // mine
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
