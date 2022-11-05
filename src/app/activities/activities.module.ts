import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { CreateActivitieComponent } from './pages/create-activitie/create-activitie.component';
import { HomeActivitiesComponent } from './pages/home-activities/home-activities.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateActivitieComponent,
    HomeActivitiesComponent,
  ],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    ReactiveFormsModule,
    // mine
    SharedModule,
  ]
})
export class ActivitiesModule { }
