import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { CustomInput } from '../custom-input.interface';
import { ClassCustomInput } from '../CustomInput';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true
    }
  ]
})
export class EmailInputComponent extends ClassCustomInput {

  @Input() formControl!: FormControl<any>;

  constructor() {
    const messageError = new Map()
      .set('required', "Correo electrónico es requerido.")
      .set('pattern', "Correo electrónico no es valido.");
    super(messageError);
  }

}
