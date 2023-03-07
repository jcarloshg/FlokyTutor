import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ActivityType } from 'src/contexts/shared/domain/models';


@Component({
  selector: 'app-activity-type-badge',
  templateUrl: './activity-type-badge.component.html',
  styleUrls: ['./activity-type-badge.component.css']
})
export class ActivityTypeBadgeComponent implements OnInit {

  @Input() activityTypePPP!: string;
  public tagEspaniol = '';
  public styleCSS = 'd-inline-flex py-0 border rounded-pill';

  constructor() { }

  ngOnInit(): void {
    // tag
    if (this.activityTypePPP == ActivityType.LISTENING) this.tagEspaniol = 'Escuchar';
    if (this.activityTypePPP == ActivityType.READING) this.tagEspaniol = 'Leer';
    if (this.activityTypePPP == ActivityType.TALKING) this.tagEspaniol = 'Hablar';
    if (this.activityTypePPP == ActivityType.WRITING) this.tagEspaniol = 'Escribir';
    // background
    if (this.activityTypePPP == ActivityType.LISTENING) this.styleCSS += ' bg-listen';
    if (this.activityTypePPP == ActivityType.READING) this.styleCSS += ' bg-read';
    if (this.activityTypePPP == ActivityType.TALKING) this.styleCSS += ' bg-speak';
    if (this.activityTypePPP == ActivityType.WRITING) this.styleCSS += ' bg-write';
  }

}
