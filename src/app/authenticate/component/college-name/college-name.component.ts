import { Component, forwardRef, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomInput } from '../CustomInput';

@Component({
  selector: 'app-college-name',
  templateUrl: './college-name.component.html',
  styleUrls: ['./college-name.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CollegeNameComponent),
      multi: true
    }
  ]
})
export class CollegeNameComponent extends CustomInput {

  @Input() formControl!: FormControl<any>;
  public value: string;

  constructor() {

    const messageError = new Map()
      .set('required', 'El registro escolar es obligatorio.')
      .set('pattern', 'El registro no es valido.');
    super(messageError);

    this.value = '';
  }

}
