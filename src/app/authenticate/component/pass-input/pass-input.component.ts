import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { CustomInput } from '../custom-input.interface';
import { ClassCustomInput } from '../CustomInput';

@Component({
  selector: 'app-pass-input',
  templateUrl: './pass-input.component.html',
  styleUrls: ['./pass-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PassInputComponent),
      multi: true
    }
  ]
})
export class PassInputComponent extends ClassCustomInput {

  @Input() formControl!: FormControl<any>;

  constructor() {
    const messageError = new Map()
      .set('required', "La contraseña es requerido.")
      .set('pattern', "La contraseña no es valido.");
    super(messageError);
  }

}
