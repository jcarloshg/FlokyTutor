import { Component, OnInit } from '@angular/core';

// name             |                   | nombre actividad
// activitieLevel   |   ActivityLevel   |
// typeActivity     |   ActivityType    |
// topicID          |   topicID         |
// question         |                   |
// questionBody     |                   |
// answers          |   AWSJSON         |

// topic
// id
// name

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

  ngOnInit(): void { }

}
