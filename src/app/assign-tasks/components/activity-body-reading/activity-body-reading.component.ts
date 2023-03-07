import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/contexts/shared/domain/models';

@Component({
  selector: 'app-activity-body-reading',
  templateUrl: './activity-body-reading.component.html',
  styleUrls: ['./activity-body-reading.component.css']
})
export class ActivityBodyReadingComponent implements OnInit {

  @Input() public activity!: Activity;

  constructor() { }

  ngOnInit(): void { }

  getAnswerLikeArr() {
    return Object.values(this.activity?.answers!);
  }

}
