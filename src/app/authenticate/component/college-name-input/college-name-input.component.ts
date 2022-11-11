import { Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomInput } from '../CustomInput';
import { ValidatorService } from '../../services/validators/validator.service';

@Component({
  selector: 'app-college-name-input',
  templateUrl: './college-name-input.component.html',
  styleUrls: ['./college-name-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CollegeNameInputComponent),
      multi: true
    }
  ]
})
export class CollegeNameInputComponent extends CustomInput {

  @Input() formControl!: FormControl<any>;
  public value: string;

  constructor(
    private validatorService: ValidatorService,
  ) {

    // const messageError = new Map()
    //   .set('required', 'El nombre del colegio es obligatorio.')
    //   .set('pattern', 'El nombre del colegio no es valido.');
    // super(messageError);


    const messagesError: Map<string, string> =
      validatorService.collegeNameCustomValidator.getMessageErrors();
    super(messagesError);

    this.value = '';
  }


}
