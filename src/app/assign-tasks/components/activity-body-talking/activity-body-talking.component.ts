import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/models';

@Component({
  selector: 'app-activity-body-talking',
  templateUrl: './activity-body-talking.component.html',
  styleUrls: ['./activity-body-talking.component.css']
})
export class ActivityBodyTalkingComponent implements OnInit {

  @Input() public activity!: Activity;

  constructor() { }

  ngOnInit(): void { }

}
