import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/models';

@Component({
  selector: 'app-activity-body-write',
  templateUrl: './activity-body-write.component.html',
  styleUrls: ['./activity-body-write.component.css']
})
export class ActivityBodyWriteComponent implements OnInit {

  @Input() public activity!: Activity;

  constructor() { }

  ngOnInit(): void { }

  getAnswerLikeArr() {
    return Object.values(this.activity?.answers!);
  }

  getAnswerCorrect(): string {
    return this.activity.answers?.correct!
  }

}
