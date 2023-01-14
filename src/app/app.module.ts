import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// mine
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // mine
    QuillModule.forRoot(),
    RouterModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
