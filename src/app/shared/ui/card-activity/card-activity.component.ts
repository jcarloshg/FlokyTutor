import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activity, ActivityType } from 'src/models';

@Component({
  selector: 'app-card-activity',
  templateUrl: './card-activity.component.html',
  styleUrls: ['./card-activity.component.css']
})
export class CardActivityComponent implements OnInit {

  @Input() activitie!: Activity;
  @Input() spaceLeft: boolean = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void { }

  getImageActivity(): string {
    const urlImageListen = './assets/categories/listen.png';
    const urlImageRead = './assets/categories/read.png';
    const urlImageSpeak = './assets/categories/speak.png';
    const urlImageWrtie = './assets/categories/write.png';

    const activityType = this.activitie.activityType;

    if (activityType == ActivityType.LISTENING) return urlImageListen;
    if (activityType == ActivityType.READING) return urlImageRead;
    if (activityType == ActivityType.TALKING) return urlImageSpeak;
    if (activityType == ActivityType.WRITING) return urlImageWrtie;

    return urlImageWrtie
  }

  goToActivityByID(activityID: string) {
    this.router.navigate(['./incio/actividades/', activityID])
  }

}
