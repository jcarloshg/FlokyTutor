import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { PersonInfoRowComponent } from './pages/my-profile/components/person-info-row/person-info-row.component';

// date local de la app
import localES_MX from "@angular/common/locales/es-MX";
import { ViewPublicationsModule } from '../manage_posts/nominal_cases/view-publications/view-publications.module';
registerLocaleData(localES_MX);

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

    ViewPublicationsModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'es-HN'
  }]
})
export class HomeModule { }
