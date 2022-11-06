import { Component, OnInit } from '@angular/core';
import { Activitie, ActivityLevel, ActivityType } from 'src/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/inputs/service/validators.service';

// name             |                   |   nombre actividad
// activitieLevel   |   ActivityLevel   |
// typeActivity     |   ActivityType    |
// topicID          |   topicID         |
// question         |                   |
// questionBody     |                   |
// answers          |   AWSJSON         |

// topic
// id
// name

@Component({
  selector: 'app-create-activitie',
  templateUrl: './create-activitie.component.html',
  styleUrls: ['./create-activitie.component.css']
})
export class CreateActivitieComponent implements OnInit {

  public createActivitieForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    activityLevel: ['', Validators.required],
    typeActivity: ['', Validators.required],
    question: ['', Validators.required],
    questionBody: ['', Validators.required],
    answers: ['', Validators.required],
    topicID: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    public validatorsService: ValidatorsService,
  ) { }

  ngOnInit(): void { }

  printActivitie() {
    const activitie: Activitie = {
      id: '',
      name: '',
      activityLevel: ActivityLevel.A1,
      typeActivity: ActivityType.LISTENING,
      question: '',
      questionBody: '',
      answers: '',
      topicID: '',
      createdAt: '',
      updatedAt: '',
    };

    console.log("🚀 ~ file: create-activitie.component.ts ~ line 59 ~ CreateActivitieComponent ~ printActivitie ~ this.createActivitieForm.value", this.createActivitieForm.value)
  }

}
