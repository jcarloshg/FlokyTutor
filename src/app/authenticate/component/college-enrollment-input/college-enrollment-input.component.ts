import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomInput } from '../CustomInput';

@Component({
  selector: 'app-college-enrollment-input',
  templateUrl: './college-enrollment-input.component.html',
  styleUrls: ['./college-enrollment-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CollegeEnrollmentInputComponent),
      multi: true
    }
  ]
})
export class CollegeEnrollmentInputComponent extends CustomInput {

  @Input() formControl!: FormControl<any>;
  value: string;

  constructor() {
    const messagesError = new Map<string, string>()
      .set('required', 'El registro escolar es obligatorio.')
      .set('pattern', 'El registro no es valido.');
    super(messagesError);

    this.value = '';
  }

}
