import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { CreateActivitieComponent } from './pages/create-activitie/create-activitie.component';
import { HomeActivitiesComponent } from './pages/home-activities/home-activities.component';


@NgModule({
  declarations: [
    CreateActivitieComponent,
    HomeActivitiesComponent,
  ],
  imports: [
    CommonModule,
    ActivitiesRoutingModule
  ]
})
export class ActivitiesModule { }
