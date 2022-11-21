import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/models';

@Component({
  selector: 'app-card-activity',
  templateUrl: './card-activity.component.html',
  styleUrls: ['./card-activity.component.css']
})
export class CardActivityComponent implements OnInit {

  @Input() activitie!: Activity;
  @Input() spaceLeft: boolean = false;

  constructor() { }

  ngOnInit(): void { }

}
