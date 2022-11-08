import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl, ValidationErrors, AbstractControl } from '@angular/forms';
import { Topic } from 'src/models';
import { ValidatorsService } from '../../../shared/inputs/service/validators.service';
import { ActivitiesAWS } from '../../services/activities.service';

@Component({
  selector: 'app-create-activitie',
  templateUrl: './create-activitie.component.html',
  styleUrls: ['./create-activitie.component.css']
})
export class CreateActivitieComponent implements OnInit {

  public createActivitieForm: FormGroup = this.formBuilder.group(
    {
      name: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ]{3,}( {1,2}[a-zA-ZÀ-ÿ]{3,}){1,}$')]],
      activityLevel: ['', Validators.required],
      typeActivity: ['', Validators.required],
      question: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ]{3,}( {1,2}[a-zA-ZÀ-ÿ]{3,}){2,}$')]],
      questionBody: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ]{3,}( {1,2}[a-zA-ZÀ-ÿ]{3,}){2,}$')]],
      topicID: ['', [Validators.required, Validators.pattern('^([a-zA-ZÀ-ÿ _]){1,}$')]],
      new_topic: ['', [Validators.required, Validators.pattern('^([a-zA-ZÀ-ÿ _]){1,}$')]],
      answers_correct: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ]{3,}( {1,2}[a-zA-ZÀ-ÿ]{3,}){1,}$')]],
      answers_incorrecta_1: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ]{3,}( {1,2}[a-zA-ZÀ-ÿ]{3,}){1,}$')]],
      answers_incorrecta_2: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ]{3,}( {1,2}[a-zA-ZÀ-ÿ]{3,}){1,}$')]],
      answers_incorrecta_3: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ]{3,}( {1,2}[a-zA-ZÀ-ÿ]{3,}){1,}$')]],
      examples: this.formBuilder.array([
        [
          '', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ]{3,}( {1,2}[a-zA-ZÀ-ÿ]{3,}){2,}$')]
        ],
      ], Validators.required),
    },
    {
      validators: [this.formHasAnswares()],
    }
  );

  public topics: Topic[] = [];

  private messagesError = new Map()
    .set('required', "El dato es requerido.")
    .set('pattern', "El dato no es valido")
    .set('hasAnswares', "La actividad debe tener al menos una respuesta correcta y una incorecta.");

  constructor(
    private formBuilder: FormBuilder,
    public validatorsService: ValidatorsService,
    private activitiesAWS: ActivitiesAWS,
  ) { }

  async ngOnInit(): Promise<void> {
    if (this.topics.length == 0) {
      this.topics = (await this.activitiesAWS.getAllTopic()).data;
    }
  }

  // async ngOnInit(): Promise<void> {
  //   // this.createActivitieForm.reset({
  //   //   topicID: 'new_topic',
  //   //   new_topic: 'Colores',
  //   // })
  // }

  public get examplesArr(): FormArray {
    return this.createActivitieForm.get('examples') as FormArray;
  }

  public addExample() {
    const exampleFormControl = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ]{3,}( {1,2}[a-zA-ZÀ-ÿ]{3,}){2,}$')]);
    const examplesFormArry = this.createActivitieForm.get('examples') as FormArray;
    examplesFormArry.push(exampleFormControl);
  }

  public deleteExample(exampleIndex: number) {
    const examplesFormArry = this.createActivitieForm.get('examples') as FormArray;
    examplesFormArry.removeAt(exampleIndex);
  }

  public showMessageError(nameFormControl: string) {
    const isFieldTouched = this.createActivitieForm.get(nameFormControl)?.touched;
    const fieldHasErrors = this.createActivitieForm.get(nameFormControl)?.errors;

    const fieldIsValid = isFieldTouched && fieldHasErrors;

    return (fieldIsValid == null || fieldIsValid == false)
      ? false
      : true;
  }

  public getMessageError(nameFormControl: string): string | null {
    const objErrors = this.createActivitieForm.get(nameFormControl)?.errors;
    if (objErrors == null || objErrors == undefined) return null;
    const typesErrors: string[] = Object.keys(objErrors); // example -> ["required","pattern"]
    const typeError = typesErrors[0];
    const messageError = this.messagesError.get(typeError);
    return messageError ?? null;
  }

  public showMessageErrorExamples(indexExample: number): boolean {
    const examplesFormArry = this.createActivitieForm.get('examples') as FormArray;
    const exampleFormControl = examplesFormArry.at(indexExample);

    const isFieldTouched = exampleFormControl.touched;
    const fieldHasErrors = exampleFormControl.errors;

    const fieldIsValid = isFieldTouched && fieldHasErrors;

    return (fieldIsValid == null || fieldIsValid == false)
      ? false
      : true;
  }

  public getMessageErrorExamples(indexExample: number): string | null {
    const examplesFormArry = this.createActivitieForm.get('examples') as FormArray;
    const exampleFormControl = examplesFormArry.at(indexExample);
    const objErrors = exampleFormControl.errors;
    if (objErrors == null || objErrors == undefined) return null;
    const typesErrors: string[] = Object.keys(objErrors); // example -> ["required","pattern"]
    const typeError = typesErrors[0];
    const messageError = this.messagesError.get(typeError);
    return messageError ?? null;
  }

  public formHasAnswares() {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const answers_correct = formGroup.get('answers_correct')?.value;
      const answers_incorrecta_1 = formGroup.get('answers_incorrecta_1')?.value;
      const answers_incorrecta_2 = formGroup.get('answers_incorrecta_2')?.value;
      const answers_incorrecta_3 = formGroup.get('answers_incorrecta_3')?.value;

      const formHasAnswerCorrect: boolean = answers_correct ?? false;
      const formHasAnswerError: boolean = answers_incorrecta_1 || answers_incorrecta_2 || answers_incorrecta_3;

      if (formHasAnswerCorrect && formHasAnswerError) return null;

      return {
        hasAnswares: 'should have one answer correct && one answer incorrect',
      }
    }
  }

  public async crearActivitie() {

    // TODO - check valid form
    // const isValidCreatedForm = this.createActivitieForm.valid;
    // console.log(isValidCreatedForm);
    // this.createActivitieForm.markAllAsTouched();

    console.log(await this.activitiesAWS.getAllTopic());

    // const isValidNewTopic = this.createActivitieForm.get('new_topic')?.valid;
    // if (isValidNewTopic == false) {
    //   this.createActivitieForm.get('new_topic')?.markAsTouched();
    //   return;
    // }
    // const nameTopic = this.createActivitieForm.get('new_topic')?.value;
    // const createTopicRes = await this.activitiesAWS.createTopic(nameTopic, null, []);
    // console.log(`[createTopicRes] -> `, createTopicRes);

  }

}
