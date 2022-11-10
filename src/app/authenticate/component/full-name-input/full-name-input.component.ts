import { Component, Input, forwardRef } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ClassCustomInput } from '../CustomInput';

@Component({
  selector: 'app-full-name-input',
  templateUrl: './full-name-input.component.html',
  styleUrls: ['./full-name-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FullNameInputComponent),
      multi: true
    }
  ]
})
export class FullNameInputComponent extends ClassCustomInput {

  @Input() formControl!: FormControl<any>;

  constructor() {
    const messagesError = new Map()
      .set('required', "Nombre es requerido.")
      .set('pattern', "Debe ser el nombre con apellidos.")
      .set('short_name', "Nombre no es valido.")

    super(messagesError);
  }


}
