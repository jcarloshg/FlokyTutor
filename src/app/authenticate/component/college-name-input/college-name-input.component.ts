import { Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomInput } from '../CustomInput';

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

  constructor() {

    const messageError = new Map()
      .set('required', 'El nombre del colegio es obligatorio.')
      .set('pattern', 'El nombre del colegio no es valido.');
    super(messageError);

    this.value = '';
  }


}
