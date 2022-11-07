import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidatorsService } from '../../../shared/inputs/service/validators.service';

@Component({
  selector: 'app-create-activitie',
  templateUrl: './create-activitie.component.html',
  styleUrls: ['./create-activitie.component.css']
})
export class CreateActivitieComponent implements OnInit {

  public createActivitieForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){1,}$')]],
    activityLevel: ['', Validators.required],
    typeActivity: ['', Validators.required],
    question: ['', Validators.required],
    questionBody: ['', Validators.required],
    topicID: ['', Validators.required],
    answers_correct: ['', Validators.required],
    answers_incorrecta_1: ['', Validators.required],
    answers_incorrecta_2: ['', Validators.required],
    answers_incorrecta_3: ['', Validators.required],
    examples: this.formBuilder.array([[''],], Validators.required),
  });

  public topicFormControl: FormControl = this.formBuilder.control('', Validators.required);

  private messagesError = new Map()
    .set('required', "El dato es requerido.")
    .set('pattern', "El dato no es valido");

  constructor(
    private formBuilder: FormBuilder,
    public validatorsService: ValidatorsService,
  ) { }

  ngOnInit(): void { }

  public get examplesArr(): FormArray {
    return this.createActivitieForm.get('examples') as FormArray;
  }

  public addExample() {
    const exampleFormControl = new FormControl('', Validators.required);
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
    const typesErrors = Object.keys(objErrors); // example -> ["required","pattern"]
    const typeError = typesErrors[0];
    const messageError = this.messagesError.get(typeError);
    return messageError ?? null;
  }

  printActivitie() {
    console.log("🚀 ~ file: create-activitie.component.ts ~ line 73 ~ CreateActivitieComponent ~ printActivitie ~ this.topicFormControl", this.topicFormControl)
  }

}
