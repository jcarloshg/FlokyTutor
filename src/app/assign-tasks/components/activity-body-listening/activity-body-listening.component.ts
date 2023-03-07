import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/contexts/shared/domain/models';

@Component({
  selector: 'app-activity-body-listening',
  templateUrl: './activity-body-listening.component.html',
  styleUrls: ['./activity-body-listening.component.css']
})
export class ActivityBodyListeningComponent implements OnInit {

  @Input() public activity!: Activity;

  constructor() { }

  ngOnInit(): void {
  }

}
