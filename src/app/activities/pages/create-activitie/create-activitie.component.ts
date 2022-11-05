import { Component, OnInit } from '@angular/core';

// name             |
// activitieLevel   |   ActivityLevel
// typeActivity     |   ActivityType
// question
// questionBody
// answers
// topicID

// enum ActivityLevel {
//   A1
//   A2
//   B1
//   B2
//   C1
//   C2
// }

// enum ActivityType {
//   WRITING
//   READING
//   TALKING
//   LISTENING
// }

@Component({
  selector: 'app-create-activitie',
  templateUrl: './create-activitie.component.html',
  styleUrls: ['./create-activitie.component.css']
})
export class CreateActivitieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
